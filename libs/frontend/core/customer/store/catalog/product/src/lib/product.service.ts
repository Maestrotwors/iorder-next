import { HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, finalize, tap } from 'rxjs';
import { LoaderStore } from '@iorder-next/frontend/core/shared/components/loader';
import { CoreApiService } from '@iorder-next/frontend/core/shared/services/api-core';
import { GetCatalogProductDetailsCommand } from '@iorder-next/contracts/api';

@Injectable({ providedIn: 'root' })
export class CustomerProductService {
  #api = inject(CoreApiService);
  #loaderStore = inject(LoaderStore);

  getProduct(query: GetCatalogProductDetailsCommand.RequestQuery): Observable<HttpResponse<GetCatalogProductDetailsCommand.Response>> {
    const TASK_NAME = 'getProduct';
    return this.#api.get<GetCatalogProductDetailsCommand.Response>('catalog/product-details', { params: query}).pipe(
      tap(() => this.#loaderStore.addTask(TASK_NAME)),
      delay(500),
      finalize(() => this.#loaderStore.removeTask(TASK_NAME))
    );
  }
}
