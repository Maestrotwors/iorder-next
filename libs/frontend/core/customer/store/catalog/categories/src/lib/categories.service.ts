import { HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { LoaderStore } from '@iorder-next/frontend/core/shared/components/loader';
import { CoreApiService } from '@iorder-next/frontend/core/shared/services/api-core';
import { GetCatalogCategoriesCommandResponse } from '@iorder-next/contracts/api';
import { GetCategoriesDto } from './dto/get-categories.dto';

@Injectable({ providedIn: 'root' })
export class CatalogCategoriesService {
  #api = inject(CoreApiService);
  #loaderStore = inject(LoaderStore);

  getCategories(dto: GetCategoriesDto): Observable<HttpResponse<GetCatalogCategoriesCommandResponse>> {
    return this.#api.get<GetCatalogCategoriesCommandResponse>('catalog/categories', { params: dto }).pipe(
      tap(() => this.#loaderStore.addTask('getCategories')),
      finalize(() => this.#loaderStore.removeTask('getCategories')),
    );
  }
}
