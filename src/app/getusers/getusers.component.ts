import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../persons.service';
import { User } from '../user.model';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css'],
  providers : [PersonsService]
})
export class GetusersComponent implements OnInit {
users : User[] = [];
selectedUser: User = new User();
IsShowEditBox : boolean = false;
  constructor(private http : PersonsService) {}

  ngOnInit(): void {
  }

FetchUsers(){
this.users = this.http.onFetchUsers();
}
DeleteUser(id : number){
this.http.OnDeleteUser(id);
}
ShowEditBox(id : number){
this.IsShowEditBox = true;
for (let i = 0; i < this.users.length; i++) {
  if(this.users[i].id == id){
    this.selectedUser = this.users[i];
  }
}
}
EditUsers(postData: { userName : string,groupid : number,lastName : string,firstName : string,id : number,email: string; password: string }){
this.http.EditUser(postData);
}
}
