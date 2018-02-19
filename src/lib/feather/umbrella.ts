import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-umbrella',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-umbrella">
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
  </svg>`
})
export class IconUmbrellaComponent {}

@NgModule({
  declarations: [ IconUmbrellaComponent ],
  exports: [ IconUmbrellaComponent ]
})
export class IconUmbrella {}
