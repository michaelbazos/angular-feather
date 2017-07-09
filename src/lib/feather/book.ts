import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-book',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/book.svg'
})
export class IconBookComponent {}

@NgModule({
  declarations: [ IconBookComponent ],
  exports: [ IconBookComponent ]
})
export class IconBook {}
