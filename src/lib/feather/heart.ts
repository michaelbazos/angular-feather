import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-heart',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/heart.svg'
})
export class IconHeartComponent {}

@NgModule({
  declarations: [ IconHeartComponent ],
  exports: [ IconHeartComponent ]
})
export class IconHeart {}
