import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-star',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-star">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>`
})
export class IconStarComponent {}

@NgModule({
  declarations: [ IconStarComponent ],
  entryComponents: [ IconStarComponent ],
  exports: [ IconStarComponent ]
})
export class IconStar {}
