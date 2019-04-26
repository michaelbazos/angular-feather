import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-edit-2',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit-2">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>`
})
export class IconEdit2Component {}

@NgModule({
  declarations: [ IconEdit2Component ],
  entryComponents: [ IconEdit2Component ],
  exports: [ IconEdit2Component ]
})
export class IconEdit2 {}
