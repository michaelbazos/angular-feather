import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-edit-3',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-3">
    <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>`
})
export class IconEdit3Component {}

@NgModule({
  declarations: [ IconEdit3Component ],
  exports: [ IconEdit3Component ]
})
export class IconEdit3 {}
