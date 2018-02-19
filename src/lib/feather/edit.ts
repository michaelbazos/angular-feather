import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-edit',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-edit">
    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
  </svg>`
})
export class IconEditComponent {}

@NgModule({
  declarations: [ IconEditComponent ],
  exports: [ IconEditComponent ]
})
export class IconEdit {}
