import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CustomerProductsService } from "@iorder-next/frontend/shared/customer/catalog";
import { inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
type CatalogProductsState = {
  products: any[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: CatalogProductsState = {
  products: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const CatalogProductsStore = signalStore(
  withState(initialState),
  withMethods((store, catalogProductsService = inject(CustomerProductsService)) => ({
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return catalogProductsService.getProducts().pipe(
            tapResponse({
              next: (productsResponse: any) => {
                console.log(productsResponse);
                console.log(productsResponse.body.products.items);
                patchState(store, { products: productsResponse.body.products.items });
              },
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          );
        }),
      ),
    )
  }))
);


/*import { inject } from "@angular/core";
import { Injectable } from "@nestjs/common";
import { exhaustMap, pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators';
import { CustomerProductsService } from "@iorder-next/frontend/shared/customer/catalog";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { signalState, patchState } from '@ngrx/signals';

type ProductsState = { products: any[]; isLoading: boolean };

const initialState: ProductsState = {
  products: [
    //{id: 10, name: 'iPhone 15', mainImageUrl: 'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/8006540512180.jpg', price: 1500},
    //{id: 8, name: 'Gala', mainImageUrl: 'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/8006540512180.jpg', price: 5}
  ],
  isLoading: false,
};

@Injectable()
export class CatalogProductsStore {
  readonly #catalogProductsService = inject(CustomerProductsService);
  readonly #state = signalState(initialState);

  readonly products = this.#state.products;
  readonly isLoading = this.#state.isLoading;

  readonly loadProducts = rxMethod<void>(
    pipe(
      tap(() => patchState(this.#state, { isLoading: true })),
      switchMap(() => {
        return this.#catalogProductsService.getProducts().pipe(
          tapResponse({
            next: (productsResponse: any) => {
              console.log(productsResponse);
              console.log(productsResponse.body.products.items);
              patchState(this.#state, { products: productsResponse.body.products.items });
            },
            error: console.error,
            finalize: () => patchState(this.#state, { isLoading: false }),
          }),
        );
      }),
    ),
  );
}*/

/**/
