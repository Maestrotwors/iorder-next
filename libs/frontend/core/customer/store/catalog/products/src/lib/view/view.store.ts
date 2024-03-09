import { inject } from '@angular/core';
import { RepositoryCoreService } from '@iorder-next/frontend/core/shared/services/repository-core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export type CatalogProductsViewType = 'list' | 'card';
type ProductsViewType = CatalogProductsViewType | null;
type CatalogProductsViewState = {
  productsViewType: ProductsViewType;
};

const initialCatalogProductsViewState: CatalogProductsViewState = {
  productsViewType: null,
};

const PRODUCTS_VIEW_TYPE = 'CustomerCatalogProductsViewType';

export const CatalogProductsViewStore = signalStore(
  withState(initialCatalogProductsViewState),
  withMethods((store, repository = inject(RepositoryCoreService)) => ({
    loadCatalogProductsViewType(): void {
      const catalogProductsViewType = repository.get(PRODUCTS_VIEW_TYPE);
      if (catalogProductsViewType) {
        patchState(store, { productsViewType: catalogProductsViewType === 'list' ? 'list' : 'card' });
      }
    },
    setProductsViewType(view: CatalogProductsViewType): void {
      if (!view) return;
      patchState(store, { productsViewType: view });
      repository.set(PRODUCTS_VIEW_TYPE, view);
    },
  })),
);
