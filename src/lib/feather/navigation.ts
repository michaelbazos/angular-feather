import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-navigation',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/navigation.svg'
})
export class IconNavigationComponent {}

@NgModule({
  declarations: [ IconNavigationComponent ],
  exports: [ IconNavigationComponent ]
})
export class IconNavigation {}
