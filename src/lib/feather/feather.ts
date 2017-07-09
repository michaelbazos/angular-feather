import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-feather',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/feather.svg'
})
export class IconFeatherComponent {}

@NgModule({
  declarations: [ IconFeatherComponent ],
  exports: [ IconFeatherComponent ]
})
export class IconFeather {}
