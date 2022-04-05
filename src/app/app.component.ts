import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTrain';
  public static responseToken ='';
  
  hasan = [1,2,3,4];
  constructor(private http: HttpClient) {}
  
  ngOnInit() {}

  onClearPosts() {
    // Send Http request
  }
}
