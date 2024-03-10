import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CustomerProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';

type CatalogProductsState = {
  products: unknown[];
  totalCountProducts: number;
  isLoading: boolean;
  error: boolean;
};

const initialCatalogProductsState: CatalogProductsState = {
  products: [],
  totalCountProducts: 0,
  isLoading: false,
  error: false,
};

export const CatalogProductsStore = signalStore(
  withState(initialCatalogProductsState),
  withMethods(
    (
      store,
      catalogProductsService = inject(CustomerProductsService),
      route = inject(ActivatedRoute),
      queryParams = inject(ActivatedRoute).snapshot.queryParams,
      router = inject(Router),
      destryRef = inject(DestroyRef),
    ) => ({
      loadProducts: rxMethod<void>(
        pipe(
          tap(() => patchState(store, { isLoading: true, products: [] })),
          switchMap(() => {
            return catalogProductsService
              .getProducts({ supplierId: queryParams['sId'], page: queryParams['page'] || 1, limit: queryParams?.['limit'] || 10 })
              .pipe(
                tapResponse({
                  next: productsResponse => {
                    if (productsResponse.body) {
                      patchState(store, {
                        products: productsResponse.body.products.items,
                        totalCountProducts: productsResponse.body.products.totalCountProducts,
                        error: false,
                        isLoading: false,
                      });
                    } else {
                      patchState(store, { products: [], error: true, isLoading: false });
                    }
                  },
                  error: () => {
                    patchState(store, { products: [], error: true, isLoading: false });
                  },
                }),
              );
          }),
          takeUntilDestroyed(destryRef),
        ),
      ),
      navigateToProduct(productId: number) {
        router.navigate(['product', productId], { relativeTo: route, queryParams: { sId: 1, dp: 1, le: 1 } });
      },
    }),
  ),
);
