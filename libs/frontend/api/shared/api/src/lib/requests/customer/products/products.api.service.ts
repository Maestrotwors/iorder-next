import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreApiService } from "../../../core/core.api.service";
import { HttpResponse } from "@angular/common/http";

@Injectable({ providedIn: 'root'})
export class ProductsApiService extends CoreApiService{
  getProducts(): Observable<HttpResponse<any>> {
    return this.get('products');
  }
}
