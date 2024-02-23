import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  setEntities,
} from '@ngneat/elf-entities';
import { Product } from '../models/product.model';
import { ProductsInfoStore } from '../store-models/products-info.store.model';
import { joinRequestResult } from '@ngneat/elf-requests';

@Injectable()
export class CatalogProductsRepository {
  private productsStore = createStore(
    { name: 'catalogProducts' },
    withEntities<Product>()
  );

  private productsInfoStore = createStore(
    { name: 'catalogTotalCountProducts' },
    withProps<ProductsInfoStore>({
      totalCount: 0,
    })
  );

  products$ = this.productsStore.pipe(
    selectAllEntities(),
    joinRequestResult(['catalogProducts'])
  );

  productsCount$ = this.productsInfoStore.pipe(
    select((store) => store.totalCount)
  );

  setProducts(product: Product[], productsInfo: ProductsInfoStore): void {
    this.productsStore.update(setEntities(product));
    this.productsInfoStore.update((store) => ({ ...store, ...productsInfo }));
  }
}
