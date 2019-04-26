import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-volume-x',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-x">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>`
})
export class IconVolumeXComponent {}

@NgModule({
  declarations: [ IconVolumeXComponent ],
  entryComponents: [ IconVolumeXComponent ],
  exports: [ IconVolumeXComponent ]
})
export class IconVolumeX {}
