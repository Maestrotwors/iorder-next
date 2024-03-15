import { HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize, tap } from 'rxjs';
import { LoaderStore } from '@io/frontend/core/shared/components/loader';
import { CoreApiService } from '@io/frontend/core/shared/services/api-core';
import { GetCatalogProductDetailsCommandResponse, GetCatalogProductDetailsCommandRequestQuery } from '@io/contracts/api';

@Injectable({ providedIn: 'root' })
export class CustomerProductService {
  #api = inject(CoreApiService);
  #loaderStore = inject(LoaderStore);

  getProduct(query: GetCatalogProductDetailsCommandRequestQuery): Observable<HttpResponse<GetCatalogProductDetailsCommandResponse>> {
    const TASK_NAME = 'getProduct';
    return this.#api.get<GetCatalogProductDetailsCommandResponse>('catalog/product-details', { params: query }).pipe(
      tap(() => this.#loaderStore.addTask(TASK_NAME)),
      //delay(500),
      finalize(() => this.#loaderStore.removeTask(TASK_NAME)),
    );
  }
}
