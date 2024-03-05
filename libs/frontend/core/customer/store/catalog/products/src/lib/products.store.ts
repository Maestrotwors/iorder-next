import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DestroyRef, computed, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CustomerProductsService } from './products.service';

type CatalogProductsState = {
  products: any[];
  isLoading: boolean;
  error: boolean;
};

const initialState: CatalogProductsState = {
  products: [],
  isLoading: false,
  error: false,
};

export const CatalogProductsStore = signalStore(
  withState(initialState),
  withComputed(store => {
    return {
      productsCount: computed(() => store.products().length),
    };
  }),
  withMethods((store, catalogProductsService = inject(CustomerProductsService), destryRef = inject(DestroyRef)) => ({
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, products: [] })),
        switchMap(() => {
          return catalogProductsService.getProducts().pipe(
            tapResponse({
              next: productsResponse => {
                if (productsResponse.body) {
                  patchState(store, { products: productsResponse.body.products.items, error: false, isLoading: false });
                } else {
                  patchState(store, { products: [], error: true, isLoading: false });
                }
              },
              error: error => {
                console.error(error);
                patchState(store, { products: [], error: true, isLoading: false });
              },
            }),
          );
        }),
        takeUntilDestroyed(destryRef),
      ),
    ),
  })),
);
