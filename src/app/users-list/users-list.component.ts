import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users : Array<User> = [];

  constructor(private userService: UserService) { 

    this.userService.getUsers().subscribe(response => {
      if (response.data) {
        this.users = response.data;
      }
    });
  }

  ngOnInit(): void {
   
  }

}
