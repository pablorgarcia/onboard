import { Component, Input } from '@angular/core';
import { ButtonData } from '../button/button.interface';

@Component({
  selector: 'span[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.btn-disabled]': 'disabled || null',
    '[class.btn-enabled]': '!disabled'
  },
  inputs: ['data', 'disabled']
})
export class ButtonComponent {

  @Input() data: ButtonData = {};
  @Input() disabled: boolean = true;

  constructor() {}

}
