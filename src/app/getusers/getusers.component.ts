import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpRequests } from '../httpRequests.service';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }
  a : HttpRequests = new HttpRequests(this.http); 
FetchUsers(){
this.a.onFetchUsers();
}
}
