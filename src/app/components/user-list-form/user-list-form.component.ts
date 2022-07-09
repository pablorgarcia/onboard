import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list-form',
  templateUrl: './user-list-form.component.html',
  styleUrls: ['./user-list-form.component.scss']
})
export class UserListFormComponent implements OnInit {

  public users: User[] = [];

  constructor(
    private readonly userService: UsersService
  ) {}

  ngOnInit(): void {
    this.userService.users$.subscribe(data => {
      this.users = data;
    });
  }

}
