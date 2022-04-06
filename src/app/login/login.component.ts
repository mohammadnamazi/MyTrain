import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from '../persons.service';
import { LocalStorageService } from '../LocalStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [PersonsService]
})
export class LoginComponent implements OnInit {

  constructor(private http : PersonsService ,private router:Router) {}

  ngOnInit(): void {
  }
    
 logIn(postData: { email: string; password: string }){
   this.http.onLogIn(postData).subscribe(responseData => {
      LocalStorageService.set('Token', responseData.Token);
      console.log(responseData.Token);
      this.router.navigate(["/getUsers"]);
  });
}
}


