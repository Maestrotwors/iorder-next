import { HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductsApiService } from "@iorder-next/frontend/api/shared/api";
import { Observable, delay, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CustomerProductsService {
  #api = inject(ProductsApiService);

  getProducts(): Observable<HttpResponse<any>> {
    return this.#api.getProducts().pipe(
      tap(response => {
        //console.log(response);
        if (response.status === 200) {
          //console.log('Products received');
        }
      }),
      delay(2000)
    );
  }
}
