import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-shopping-cart',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/shopping-cart.svg'
})
export class IconShoppingCartComponent {}

@NgModule({
  declarations: [ IconShoppingCartComponent ],
  exports: [ IconShoppingCartComponent ]
})
export class IconShoppingCart {}
