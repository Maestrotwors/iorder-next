import { HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, finalize, tap } from 'rxjs';
import { GetCatalogProductsCommand } from '@iorder-next/contracts/api';
import { LoaderStore } from '@iorder-next/frontend/core/shared/components/loader';
import { CoreApiService } from '@iorder-next/frontend/core/shared/services/api-core';

@Injectable({ providedIn: 'root' })
export class CustomerProductsService {
  #api = inject(CoreApiService);
  #loaderStore = inject(LoaderStore);

  getProducts(): Observable<HttpResponse<GetCatalogProductsCommand.Response>> {
    return this.#api.get<GetCatalogProductsCommand.Response>('catalog/products').pipe(
      tap(() => this.#loaderStore.addTask('getProducts')),
      delay(1000),
      finalize(() => this.#loaderStore.removeTask('getProducts')),
    );
  }
}
