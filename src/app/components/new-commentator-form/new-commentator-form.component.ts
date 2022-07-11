import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Commentator } from 'src/app/models/commentator';
import { CommentatorService } from '../../services/commentator.service';
import { FORM_COMMENTATOR } from '../../services/constants/form.constants';

@Component({
  selector: 'app-new-commentator-form',
  templateUrl: './new-commentator-form.component.html',
  styleUrls: ['./new-commentator-form.component.scss']
})
export class NewCommentatorFormComponent implements OnInit {

  public commentatorForm: FormGroup = new FormGroup({});
  public commentator: Commentator[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly commentatorService: CommentatorService
  ) {}

  ngOnInit(): void {
    this.commentatorForm = this.fb.group(FORM_COMMENTATOR);
    this.commentatorService.commentator$.subscribe(data => {
      this.commentator = data;
    });
  }

  addComentator() {
    console.log('on submit addComentator', this.commentatorForm.value)
    this.commentatorForm.value.created = new Date();
    this.commentatorService.addComentator(this.commentatorForm.value);
    //this.commentatorForm.value.ytUrl = '';
  }

  updateComentator() {
    console.log('on submit updateComentator', this.commentatorForm.value)
    this.commentatorForm.value.created = new Date();
    this.commentatorService.updateComentator(this.commentatorForm.value);
  }

  deleteComentator() {
    console.log('on submit deleteComentator')
    this.commentatorService.deleteComentator();
  }

}
