import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreApiService } from "../../../core/core.api.service";
import { HttpResponse } from "@angular/common/http";
import { GetCatalogProductsCommand } from "@iorder-next/contracts/api";

@Injectable({ providedIn: 'root'})
export class ProductsApiService extends CoreApiService{
  getProducts(): Observable<HttpResponse<GetCatalogProductsCommand.Response>> {
    return this.get('catalog/products');
  }
}
