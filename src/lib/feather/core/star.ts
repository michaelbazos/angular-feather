import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-star',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/star.svg'
})
export class IconStarComponent {}

@NgModule({
  declarations: [ IconStarComponent ],
  exports: [ IconStarComponent ]
})
export class IconStar {}
