import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const ApiUrlInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  // TODO environment
  const cloned = req.clone({
    url: 'http://localhost:4200/api/v1/' + req.url
  });
  return next(cloned);
}
