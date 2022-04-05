import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequests } from '../httpRequests.service';
import { LocalStorageService } from '../LocalStorage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) {}
token = '';
  ngOnInit(): void {
  }
 a : HttpRequests = new HttpRequests(this.http); 
 CreatePost(postData: { email: string; password: string }){
   this.a.onCreatePost(postData);
}
onNavigateToGetUsers(){
  setTimeout(() => {
    console.log('sleep');
    this.router.navigate(["/getUsers"]);
    // And any other code that should run only after 5s
  }, 5000);

}
}
