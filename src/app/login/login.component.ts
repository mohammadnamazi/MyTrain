import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpRequests } from '../httpRequests.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
 a : HttpRequests = new HttpRequests(this.http); 
CreatePost(postData: { email: string; password: string }){
  this.a.onCreatePost(postData);
}
}
