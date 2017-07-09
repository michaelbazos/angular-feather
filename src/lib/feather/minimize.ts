import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-minimize',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/minimize.svg'
})
export class IconMinimizeComponent {}

@NgModule({
  declarations: [ IconMinimizeComponent ],
  exports: [ IconMinimizeComponent ]
})
export class IconMinimize {}
