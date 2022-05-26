import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    ytUrl: new FormControl(),
    created: new FormControl()
  });


  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UsersService) {}


  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      ytUrl: ['', [Validators.required]]
    })
  }


  async onSubmit() {
    console.log(this.userForm.value)
    this.userForm.value.created = new Date();
    this.userService.addUser(this.userForm.value);
  }

}
