import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';

/**
 * A module containing objects associated with button components
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ButtonComponent],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule
  ]
})
export class ButtonModule {}
