import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-fast-forward',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-fast-forward">
    <polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>
  </svg>`
})
export class IconFastForwardComponent {}

@NgModule({
  declarations: [ IconFastForwardComponent ],
  entryComponents: [ IconFastForwardComponent ],
  exports: [ IconFastForwardComponent ]
})
export class IconFastForward {}
