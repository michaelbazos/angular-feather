import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-thumbs-down',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-thumbs-down">
    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
  </svg>`
})
export class IconThumbsDownComponent {}

@NgModule({
  declarations: [ IconThumbsDownComponent ],
  entryComponents: [ IconThumbsDownComponent ],
  exports: [ IconThumbsDownComponent ]
})
export class IconThumbsDown {}
