import { Component, OnInit } from '@angular/core';
import {User} from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = "Welcome to hell";
  users : User [];

  constructor() {
    this.users = [{
      name: "bob",
      age: "12"
    }];
  }

  ngOnInit() {
  }

}
