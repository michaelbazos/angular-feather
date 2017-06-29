import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-flag',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/flag.svg'
})
export class IconFlagComponent {}

@NgModule({
  declarations: [ IconFlagComponent ],
  exports: [ IconFlagComponent ]
})
export class IconFlag {}
