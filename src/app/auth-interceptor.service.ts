import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';


export class AuthInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');
     if(AppComponent.responseToken != ''){
         const modifiedRequest = request.clone({headers : request.headers.append('Authorization' , 'Bearer '+AppComponent.responseToken)});
         return next.handle(modifiedRequest);
        }
     else{
        return next.handle(request);
        }
  }
}