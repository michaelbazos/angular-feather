import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-scissors',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/scissors.svg'
})
export class IconScissorsComponent {}

@NgModule({
  declarations: [ IconScissorsComponent ],
  exports: [ IconScissorsComponent ]
})
export class IconScissors {}
