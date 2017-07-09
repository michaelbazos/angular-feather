import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-delete',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/delete.svg'
})
export class IconDeleteComponent {}

@NgModule({
  declarations: [ IconDeleteComponent ],
  exports: [ IconDeleteComponent ]
})
export class IconDelete {}
