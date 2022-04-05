import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { GetusersComponent } from './getusers/getusers.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRouts : Routes = [
  {path : '' , component:HomeComponent},
  {path:'LogIn' , component : LoginComponent},
  {path:'getUsers' , component : GetusersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetusersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
