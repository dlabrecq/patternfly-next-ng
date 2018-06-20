import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { ButtonEvent } from './button-event';
import { ButtonStyle, ButtonType } from './button-type';

/**
 * Button component.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  /**
   * Indicates button should automatically get focus when the page loads
   */
  @Input() autofocus: boolean = false;

  /**
   * The disabled state
   */
  @Input() disabled: boolean = false;

  /**
   * Specifies one or more forms the button belongs to
   */
  @Input() form: string;

  /**
   * Specifies where to send the form-data (a URL) when a form is submitted. Only for type submit
   */
  @Input() formAction: string;

  /**
   * Specifies how form-data should be encoded before sending it to a server. Only for type submit
   *
   * See [[ButtonFormEncType]]
   */
  @Input() formEncType: string;

  /**
   * Specifies how to send the form-data (which HTTP method to use). Only for type submit
   *
   * See [[ButtonFormMethod]]
   */
  @Input() formMethod: string;

  /**
   * Specifies that the form-data should not be validated on submission. Only for type submit
   */
  @Input() formNoValidate: boolean = false;

  /**
   * Specifies where to display the response after submitting the form. Only for type submit
   *
   * See [[ButtonFormTarget]]
   */
  @Input() formTarget: string;

  /**
   * The button ID
   */
  @Input() id: string;

  /**
   * The button name
   */
  @Input() name: string;

  /**
   * The button style
   *
   * See [[ButtonStyle]]
   */
  @Input() style: string = ButtonStyle.DEFAULT;

  /**
   * The button tooltip
   */
  @Input() tooltip: string;

  /**
   * The button type
   *
   * See [[ButtonType]]
   */
  @Input() type: string = ButtonType.BUTTON;

  /**
   * The initial button value
   */
  @Input() value: string;

  /**
   * The event emitted when a button has been clicked
   */
  @Output('onClick') onClick = new EventEmitter();

  /**
   * The default constructor
   */
  constructor() {
  }

  // Initialization

  /**
   * Setup component configuration upon initialization
   */
  ngOnInit(): void {
  }

  // Actions

  handleClick($event: MouseEvent): void {
    this.onClick.emit({
      eventName: 'onClick',
      id: this.id,
      name: this.name,
      value: this.value
    } as ButtonEvent);
  }
}
