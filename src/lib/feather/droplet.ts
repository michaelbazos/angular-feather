import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-droplet',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-droplet">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>`
})
export class IconDropletComponent {}

@NgModule({
  declarations: [ IconDropletComponent ],
  entryComponents: [ IconDropletComponent ],
  exports: [ IconDropletComponent ]
})
export class IconDroplet {}
