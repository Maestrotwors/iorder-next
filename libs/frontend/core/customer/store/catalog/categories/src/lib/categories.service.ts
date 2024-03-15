import { HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderStore } from '@io/frontend/core/shared/components/loader';
import { CoreApiService } from '@io/frontend/core/shared/services/api-core';
import { GetCatalogCategoriesCommandResponse } from '@io/contracts/api';
import { GetCategoriesDto } from './dto/get-categories.dto';

@Injectable({ providedIn: 'root' })
export class CatalogCategoriesService {
  #api = inject(CoreApiService);
  #loaderStore = inject(LoaderStore);

  getCategories(dto: GetCategoriesDto): Observable<HttpResponse<Required<GetCatalogCategoriesCommandResponse>>> {
    this.#loaderStore.addTask('getCategories');
    return this.#api
      .get<Required<GetCatalogCategoriesCommandResponse>>('catalog/categories', { params: dto })
      .pipe(finalize(() => this.#loaderStore.removeTask('getCategories')));
  }
}
