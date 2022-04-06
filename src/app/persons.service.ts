import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, map } from "rxjs";
import { AppComponent } from "./app.component";
import { LocalStorageService } from "./LocalStorage.service";
import { User } from "./user.model";

@Injectable()
export class PersonsService 
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
        'https://localhost:7209/Person/Add',
        postData)
      .subscribe(responseData => {
      });
  }

  public OnDeleteUser(id: number){
    this.http.delete('https://localhost:7209/Person/Delete?id='+id).subscribe(responseData => {
    })
  }

  onFetchUsers() : User[] {
    const userArray : User[] = [];
    this.http.get<{array : []}>('https://localhost:7209/Person/get').pipe(
      map((responseData : {[key : number] : User}) => {
        
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            userArray.push({  ...responseData[key] });
          }
        }
        return userArray;
      })
    ).subscribe(responseDataUsers => {
      this.Users = responseDataUsers;
      //console.log(responseDataUsers);
      }
      );
      return userArray;
  }
  public EditUser(postData: { userName : string , groupid : number, lastName : string,firstName : string , id : number,email: string; password: string }) {
    // Send Http request
    console.log(postData.id);
     this.http
      .put(
        'https://localhost:7209/Person/Update',
        postData)
      .subscribe(responseData => {
        console.log("usercreating");
      });
  }
}