import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-shopping-bag',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-shopping-bag">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>`
})
export class IconShoppingBagComponent {}

@NgModule({
  declarations: [ IconShoppingBagComponent ],
  entryComponents: [ IconShoppingBagComponent ],
  exports: [ IconShoppingBagComponent ]
})
export class IconShoppingBag {}
