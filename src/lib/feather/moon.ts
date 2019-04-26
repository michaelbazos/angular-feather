import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-moon',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>`
})
export class IconMoonComponent {}

@NgModule({
  declarations: [ IconMoonComponent ],
  entryComponents: [ IconMoonComponent ],
  exports: [ IconMoonComponent ]
})
export class IconMoon {}
