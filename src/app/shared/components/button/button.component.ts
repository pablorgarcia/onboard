import { Component, Input, OnInit } from '@angular/core';
import { ButtonData } from '../button/button.interface';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.btn-disabled]': 'disabled || null',
    '[class.btn-enabled]': '!disabled'
  },
  inputs: ['data', 'disabled']
})
export class ButtonComponent implements OnInit {

  @Input() data: ButtonData = {};
  @Input() disabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}

}
