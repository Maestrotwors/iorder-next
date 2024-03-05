import { HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductsApiService } from "@iorder-next/frontend/api/shared/api";
import { Observable, delay, finalize, tap } from "rxjs";
import { GetCatalogProductsCommand } from '@iorder-next/contracts/api';
import { LoaderStore } from "@iorder-next/frontend/core/shared/loader";

@Injectable({ providedIn: 'root' })
export class CustomerProductsService {
  #api = inject(ProductsApiService);
  #loaderStore = inject(LoaderStore);

  getProducts(): Observable<HttpResponse<GetCatalogProductsCommand.Response>> {
    return this.#api.getProducts().pipe(
        tap(() => this.#loaderStore.addTask('getProducts')),
        delay(1000),
        finalize(() => this.#loaderStore.removeTask('getProducts'))
      );
  }
}
