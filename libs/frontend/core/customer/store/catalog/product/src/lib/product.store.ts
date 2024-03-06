import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CustomerProductService } from './product.service';

interface Product {
  id?: number;
  name?: string;
  price?: number;
  mainImageUrl?: string | null;
}
type CatalogProductState = {
  product: Product | null;
  isLoading: boolean;
  error: boolean;
};

const initialCatalogProductState: CatalogProductState = {
  product: null,
  isLoading: false,
  error: false,
};

export const CatalogProductStore = signalStore(
  withState(initialCatalogProductState),
  withMethods((store, catalogProductService = inject(CustomerProductService), queryParams = inject(ActivatedRoute).snapshot.queryParams, destryRef = inject(DestroyRef)) => ({
    loadProduct: (productId: number) => rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true, product: null })),
        switchMap((obj) => {
          console.log(obj);
          return catalogProductService.getProduct({ supplierId: queryParams['sId'], deliveryPointId: queryParams['dp'], legalEntityId: queryParams?.['le'], productId: 1 }).pipe(
            tapResponse({
              next: productsResponse => {
                if (productsResponse.body) {
                  patchState(store, { product: productsResponse.body, error: false, isLoading: false });
                } else {
                  patchState(store, { product: null, error: true, isLoading: false });
                }
              },
              error: error => {
                console.error(error);
                patchState(store, { product: null, error: true, isLoading: false });
              },
            }),
          );
        }),
        takeUntilDestroyed(destryRef),
      ),
    )
  })),
);
