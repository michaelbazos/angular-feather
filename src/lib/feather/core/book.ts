import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-book',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/book.svg'
})
export class IconBookComponent {}

@NgModule({
  declarations: [ IconBookComponent ],
  exports: [ IconBookComponent ]
})
export class IconBook {}
