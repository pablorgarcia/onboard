import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComentatorService } from '../../services/comentator.service';
import { FORM_COMMENTATOR } from '../../services/constants/form.constants';

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
    this.comentatorForm = this.fb.group(FORM_COMMENTATOR)
  }

  onSubmit() {
    console.log('on submit', this.comentatorForm.value)
    this.comentatorForm.value.created = new Date();
    this.comentatorService.addComentator(this.comentatorForm.value);
  }

}
