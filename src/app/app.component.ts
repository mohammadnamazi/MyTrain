import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTrain';
  public static responseToken ='';
  Users = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {}
 
  onCreatePost(postData: { email: string; password: string }) {
    // Send Http request
    this.http
      .post<{Token : string}>(
        'https://localhost:7209/Token',
        postData)
      .subscribe(responseData => {

        //console.log(responseData);
        //console.log("__________________________________");
        console.log(responseData.Token);
        AppComponent.responseToken = responseData.Token ;
      });

      
  }
  
  onFetchUsers() {
    
    this.http.get<{Array  : []}>('https://localhost:7209/WeatherForecast/get').subscribe(responseDataUsers => {
      console.log(responseDataUsers);
      this.Users = responseDataUsers.Array;
      console.log(this.Users);
      }
      );
  }

  onClearPosts() {
    // Send Http request
  }
}
