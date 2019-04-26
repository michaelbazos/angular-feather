import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-play-circle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-play-circle">
    <circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>`
})
export class IconPlayCircleComponent {}

@NgModule({
  declarations: [ IconPlayCircleComponent ],
  entryComponents: [ IconPlayCircleComponent ],
  exports: [ IconPlayCircleComponent ]
})
export class IconPlayCircle {}
