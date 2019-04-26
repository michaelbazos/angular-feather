import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-share',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-share">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>`
})
export class IconShareComponent {}

@NgModule({
  declarations: [ IconShareComponent ],
  entryComponents: [ IconShareComponent ],
  exports: [ IconShareComponent ]
})
export class IconShare {}
