import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-heart',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/heart.svg'
})
export class IconHeartComponent {}

@NgModule({
  declarations: [ IconHeartComponent ],
  exports: [ IconHeartComponent ]
})
export class IconHeart {}
