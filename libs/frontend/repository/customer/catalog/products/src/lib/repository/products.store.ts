import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CustomerProductsService } from "@iorder-next/frontend/shared/customer/catalog";
import { DestroyRef, computed, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

type CatalogProductsState = {
  products: any[];
  isLoading: boolean;
};

const initialState: CatalogProductsState = {
  products: [],
  isLoading: false
};

export const CatalogProductsStore = signalStore(
  withState(initialState),
  withComputed((store) => {
    return {
      productsCount: computed(() => store.products().length)
    }
  }),
  withMethods((store, catalogProductsService = inject(CustomerProductsService), destryRef = inject(DestroyRef)) => ({
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((value) => {
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
        takeUntilDestroyed(destryRef)
      )
    )
  }))
);
