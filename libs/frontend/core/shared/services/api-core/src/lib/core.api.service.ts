import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoreApiService {
  #http = inject(HttpClient);

  get<T>(url: string, options: object): Observable<HttpResponse<T>> {
    return this.#http.get<T>(url, { ...options, observe: 'response' });
  }

  post<T>(url: string, body: unknown, options?: object): Observable<HttpResponse<T>> {
    return this.#http.post<T>(url, body, { ...options, observe: 'response' });
  }
}
