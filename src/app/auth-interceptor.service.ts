import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LocalStorageService } from './LocalStorage.service';


export class AuthInterceptorService implements HttpInterceptor {
  JwtToken = LocalStorageService.get('Token');
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');
     if(this.JwtToken != ''){
         const modifiedRequest = request.clone({headers : request.headers.append('Authorization' , 'Bearer ' + this.JwtToken)});
         return next.handle(modifiedRequest);
        }
     else{
        return next.handle(request);
        }
  }
}