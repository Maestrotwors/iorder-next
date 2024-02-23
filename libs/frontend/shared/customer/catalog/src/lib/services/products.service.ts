import { HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductsApiService } from "@iorder-next/frontend/api/shared/api";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CustomerProductsService {
  #apiService = inject(ProductsApiService);

  getProducts(): Observable<HttpResponse<any>> {
    return this.#apiService.getProducts().pipe(
      tap(response => {
        console.log(response);
      })
    );
  }
}
