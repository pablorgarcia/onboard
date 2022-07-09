import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentatorService } from '../../services/commentator.service';
import { FORM_COMMENTATOR } from '../../services/constants/form.constants';

@Component({
  selector: 'app-new-commentator-form',
  templateUrl: './new-commentator-form.component.html',
  styleUrls: ['./new-commentator-form.component.scss']
})
export class NewCommentatorFormComponent implements OnInit {

  public commentatorForm: FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder,
    private readonly commentatorService: CommentatorService
  ) { }

  ngOnInit(): void {
    this.commentatorForm = this.fb.group(FORM_COMMENTATOR)
  }

  onSubmit() {
    console.log('on submit', this.commentatorForm.value)
    this.commentatorForm.value.created = new Date();
    this.commentatorService.addComentator(this.commentatorForm.value);
    //this.commentatorForm.value.ytUrl = '';
  }

}
