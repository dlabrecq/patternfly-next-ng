import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {ButtonEvent} from '../button-event';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'button-example',
  templateUrl: './button-example.component.html'
})
export class ButtonExampleComponent implements OnInit {
  actionsText: string = '';
  disabled: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleClick($event: ButtonEvent): void {
    this.actionsText =
      'eventName: ' + $event.eventName +
      ', id: ' + $event.id +
      ', value: ' + $event.value +
      '\n' + this.actionsText;
  }
}
