import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { computed} from '@angular/core';

type LoaderState = {
  tasks: string[];
};

const initialState: LoaderState = {
  tasks: []
};

export const LoaderStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => {
    return {
      isBusy: computed(() => store.tasks().length > 0),
    }
  }),
  withMethods((store) => ({
    addTask: (task: string) => {
      const currentTasks = store.tasks();
      if (currentTasks.includes(task)) return;
      patchState(store, { tasks: [...currentTasks, task] });
    },
    removeTask(taskToDelete: string) {
      const tasks = store.tasks();
      if (tasks.length) {
        patchState(store, { tasks: tasks.filter((task) => task !== taskToDelete) });
      }
    },
    clear(): void {
      patchState(store, { tasks: [] });
    }
  }))
);

/*
@Injectable({ providedIn: 'root' })
export class LoaderStatusService {
  readonly #loaderStore = inject(LoaderStore);

  isBusy: Signal<boolean>  = this.#loaderStore.isBusy;

  addTask(task: string):void {
    this.#loaderStore.addTask(task);
  }

  removeTask(task: string):void {
    this.#loaderStore.removeTask(task);
  }

  clear(): void {
    this.#loaderStore.clear();
  }
}
*/
