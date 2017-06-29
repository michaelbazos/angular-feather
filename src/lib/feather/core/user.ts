import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-user',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/user.svg'
})
export class IconUserComponent {}

@NgModule({
  declarations: [ IconUserComponent ],
  exports: [ IconUserComponent ]
})
export class IconUser {}
