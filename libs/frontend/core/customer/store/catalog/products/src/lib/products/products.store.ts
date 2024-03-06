import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DestroyRef, computed, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CustomerProductsService } from './products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

type CatalogProductsState = {
  products: any[];
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
  withComputed(store => {
    return {
      productsCount: computed(() => store.products().length),
    };
  }),
  withMethods((store, catalogProductsService = inject(CustomerProductsService), queryParams = inject(ActivatedRoute).snapshot.queryParams, router = inject(Router), destryRef = inject(DestroyRef)) => ({
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, products: [] })),
        switchMap(() => {
          return catalogProductsService.getProducts({ supplierId: queryParams['sId'], page: queryParams['page'] || 1, limit: queryParams?.['limit'] || 10 }).pipe(
            tapResponse({
              next: productsResponse => {
                if (productsResponse.body) {
                  patchState(store, { products: productsResponse.body.products.items, totalCountProducts: productsResponse.body.products.totalCountProducts, error: false, isLoading: false });
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
    selectProduct(productId: number) {
      console.log(productId);
      router.navigate(['product', productId]);
    }
  })),
);
