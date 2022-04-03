import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { AppComponent } from "./app.component";
import { User } from "./user.model";

export class HttpRequests 
{
    constructor(private http: HttpClient) {}
    Users : User[] = [];
public onCreatePost(postData: { email: string; password: string }) {
    // Send Http request
    this.http
      .post<{Token : string}>(
        'https://localhost:7209/Token',
        postData)
      .subscribe(responseData => {
        console.log(responseData.Token);
        AppComponent.responseToken = responseData.Token ;
      });
  }

  onFetchUsers() {
    
    this.http.get<{array : []}>('https://localhost:7209/User/get').pipe(
      map((responseData : {[key : number] : User}) => {
        const userArray : User[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            userArray.push({  ...responseData[key] });
            console.log('response data');
            console.log( responseData[key]);
            console.log('userarr');
            console.log(userArray);
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