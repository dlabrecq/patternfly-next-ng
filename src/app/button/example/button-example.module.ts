import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonExampleComponent } from './button-example.component';
import { ButtonModule } from '../button.module';
import { DemoComponentsModule } from '../../../demo/components/demo-components.module';

@NgModule({
  declarations: [
    ButtonExampleComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    DemoComponentsModule,
    FormsModule
  ],
  providers: []
})
export class ButtonExampleModule {
  constructor() {}
}
