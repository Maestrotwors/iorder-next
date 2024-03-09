import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const authToken = '123456';

  if (authToken) {
    const cloned = req.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}`,
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
