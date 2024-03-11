import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CatalogCategoriesService } from './categories.service';
import { ActivatedRoute } from '@angular/router';
import { GetCatalogCategoriesCommandResponse } from '@iorder-next/contracts/api';

export type Categories = Required<GetCatalogCategoriesCommandResponse>;

type CatalogCategoriesState = {
  categories: Categories;
  isLoading: boolean;
  error: boolean;
};

const initialState: CatalogCategoriesState = {
  categories: [],
  isLoading: false,
  error: false,
};

export const CatalogCategoriesStore = signalStore(
  withState(initialState),
  withMethods(
    (
      store,
      catalogCategoriesService = inject(CatalogCategoriesService),
      route = inject(ActivatedRoute),
      destryRef = inject(DestroyRef),
    ) => ({
      loadCategories: rxMethod<void>(
        pipe(
          tap(() => patchState(store, { isLoading: true, categories: [] })),
          switchMap(() => {
            return catalogCategoriesService.getCategories({ supplierId: route.snapshot.queryParams['sId'] }).pipe(
              tapResponse({
                next: categoriesResponse => {
                  if (categoriesResponse.body) {
                    patchState(store, { categories: categoriesResponse.body, error: false, isLoading: false });
                  } else {
                    patchState(store, { categories: [], error: true, isLoading: false });
                  }
                },
                error: () => {
                  patchState(store, { categories: [], error: true, isLoading: false });
                },
              }),
            );
          }),
          takeUntilDestroyed(destryRef),
        ),
      ),
    }),
  ),
);
