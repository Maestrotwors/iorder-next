import { HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { GetCatalogProductsCommandRequestQuery, GetCatalogProductsCommandResponse } from '@iorder-next/contracts/api';
import { LoaderStore } from '@iorder-next/frontend/core/shared/components/loader';
import { CoreApiService } from '@iorder-next/frontend/core/shared/services/api-core';

@Injectable({ providedIn: 'root' })
export class CustomerProductsService {
  #api = inject(CoreApiService);
  #loaderStore = inject(LoaderStore);

  getProducts(query: GetCatalogProductsCommandRequestQuery): Observable<HttpResponse<GetCatalogProductsCommandResponse>> {
    const TASK_NAME = 'getProducts';
    return this.#api.get<GetCatalogProductsCommandResponse>('catalog/products', { params: query }).pipe(
      tap(() => this.#loaderStore.addTask(TASK_NAME)),
      //delay(2000),
      finalize(() => this.#loaderStore.removeTask(TASK_NAME)),
    );
  }
}
