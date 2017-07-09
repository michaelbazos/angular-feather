import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-codepen',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/codepen.svg'
})
export class IconCodepenComponent {}

@NgModule({
  declarations: [ IconCodepenComponent ],
  exports: [ IconCodepenComponent ]
})
export class IconCodepen {}
