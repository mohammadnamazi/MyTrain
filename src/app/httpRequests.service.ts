import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map } from "rxjs";
import { AppComponent } from "./app.component";
import { LocalStorageService } from "./LocalStorage.service";
import { User } from "./user.model";

@Injectable()
export class HttpRequests 
{
  
    constructor(private http: HttpClient) {}
    Users : User[] = [];
    responseToken ='';
public  onLogIn(postData: { email: string; password: string }) {
    // Send Http request
    return this.http
      .post<{Token : string}>(
        'https://localhost:7209/Token',
        postData);
  }

  public createUser(postData: { userName : string,groupid : string,lastName : string,firstName : string,id : number,email: string; password: string }) {
    // Send Http request
     this.http
      .post(
        'https://localhost:7209/User/Add',
        postData)
      .subscribe(responseData => {
        console.log("usercreating");
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