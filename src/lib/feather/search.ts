import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-search',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/search.svg'
})
export class IconSearchComponent {}

@NgModule({
  declarations: [ IconSearchComponent ],
  exports: [ IconSearchComponent ]
})
export class IconSearch {}
