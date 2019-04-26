import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-shopping-cart',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-cart">
    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>`
})
export class IconShoppingCartComponent {}

@NgModule({
  declarations: [ IconShoppingCartComponent ],
  entryComponents: [ IconShoppingCartComponent ],
  exports: [ IconShoppingCartComponent ]
})
export class IconShoppingCart {}
