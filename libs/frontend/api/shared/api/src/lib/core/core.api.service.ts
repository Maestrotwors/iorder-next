import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})
export class CoreApiService {
  #http = inject(HttpClient);

  get<T>(url: string): Observable<HttpResponse<T>> {
    return this.#http.get<T>('products', { observe: 'response' });
  }
}
