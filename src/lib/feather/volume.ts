import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-volume',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
  </svg>`
})
export class IconVolumeComponent {}

@NgModule({
  declarations: [ IconVolumeComponent ],
  entryComponents: [ IconVolumeComponent ],
  exports: [ IconVolumeComponent ]
})
export class IconVolume {}
