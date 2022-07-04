import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FORM_USER } from '../../services/constants/form.constants';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UsersService
    ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group(FORM_USER)
  }

  onSubmit() {
    console.log('on submit', this.userForm.value)
    this.userForm.value.created = new Date();
    this.userService.addUser(this.userForm.value);
  }

}
