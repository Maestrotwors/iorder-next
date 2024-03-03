import { signalStore, withState } from '@ngrx/signals';

type CatalogProductsState = {
  products: any[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: CatalogProductsState = {
  products: [
    {
        "id": 1,
        "name": "iPhone XR3",
        "price": "850",
        "image": "https://prodasnovastacc.blob.core.windows.net/bad.jpg"
    },
    {
        "id": 2,
        "name": "iPhone 111111111",
        "price": "999",
        "image": "https://prodasnovastacc.blob.core.windows.net/bad.jpg"
    },
    {
        "id": 3,
        "name": "Samsung S20",
        "price": "1349",
        "image": "https://prodasnovastacc.blob.core.windows.net/product-small-images/3/8006540512180.jpg"
    }
  ],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const CatalogProductsStore = signalStore(
  withState(initialState)
);
