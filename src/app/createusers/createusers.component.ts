import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css'],
  providers : [PersonsService]
})
export class CreateusersComponent implements OnInit {
  error = null;
  constructor(private http : PersonsService ) {}

  ngOnInit(): void {
  }
  CreateUsers(postData: { userName : string,groupid : string,lastName : string,firstName : string,id : number,email: string; password: string }){
this.http.createUser(postData).subscribe(response => {}, error => {
  this.error = error.message ;
});
  }
}
