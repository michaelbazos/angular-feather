import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-volume-1',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-1">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>`
})
export class IconVolume1Component {}

@NgModule({
  declarations: [ IconVolume1Component ],
  entryComponents: [ IconVolume1Component ],
  exports: [ IconVolume1Component ]
})
export class IconVolume1 {}
