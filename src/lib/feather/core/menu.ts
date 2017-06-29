import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-menu',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/menu.svg'
})
export class IconMenuComponent {}

@NgModule({
  declarations: [ IconMenuComponent ],
  exports: [ IconMenuComponent ]
})
export class IconMenu {}
