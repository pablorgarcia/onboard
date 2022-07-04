import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComentatorService } from '../../services/comentator.service';

@Component({
  selector: 'app-new-commentator-form',
  templateUrl: './new-commentator-form.component.html',
  styleUrls: ['./new-commentator-form.component.scss']
})
export class NewCommentatorFormComponent implements OnInit {

  public comentatorForm: FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder,
    private readonly comentatorService: ComentatorService
  ) { }

  ngOnInit(): void {
    this.comentatorForm = this.fb.group({
      ytUrl: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log('on submit', this.comentatorForm.value)
    this.comentatorForm.value.created = new Date();
    this.comentatorService.addComentator(this.comentatorForm.value);
  }

}
