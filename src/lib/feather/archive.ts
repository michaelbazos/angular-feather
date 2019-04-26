import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-archive',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-archive">
    <polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>
  </svg>`
})
export class IconArchiveComponent {}

@NgModule({
  declarations: [ IconArchiveComponent ],
  entryComponents: [ IconArchiveComponent ],
  exports: [ IconArchiveComponent ]
})
export class IconArchive {}
