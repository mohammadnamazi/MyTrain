import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs";
import { AppComponent } from "./app.component";
import { LocalStorageService } from "./LocalStorage.service";
import { User } from "./user.model";

export class HttpRequests 
{
    constructor(private http: HttpClient) {}
    Users : User[] = [];
    responseToken ='';
public async onCreatePost(postData: { email: string; password: string }) {
    // Send Http request
     this.http
      .post<{Token : string}>(
        'https://localhost:7209/Token',
        postData)
      .subscribe(responseData => {
        
        setTimeout(() => {
          console.log('sleep');
          this.responseToken =  responseData.Token;
          console.log(this.responseToken);
          LocalStorageService.set('Token',this.responseToken);
          // And any other code that should run only after 5s
        }, 5000);

      });

  }

  onFetchUsers() {
    
    this.http.get<{array : []}>('https://localhost:7209/User/get').pipe(
      map((responseData : {[key : number] : User}) => {
        const userArray : User[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            userArray.push({  ...responseData[key] });
          }
        }
        return userArray;
      })
    ).subscribe(responseDataUsers => {
      console.log(responseDataUsers);
      this.Users = responseDataUsers;
      console.log(this.Users);
      //console.log(responseDataUsers);
      }
      );
  }
}