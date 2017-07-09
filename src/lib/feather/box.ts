import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-box',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/box.svg'
})
export class IconBoxComponent {}

@NgModule({
  declarations: [ IconBoxComponent ],
  exports: [ IconBoxComponent ]
})
export class IconBox {}
