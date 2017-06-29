import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-sidebar',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/sidebar.svg'
})
export class IconSidebarComponent {}

@NgModule({
  declarations: [ IconSidebarComponent ],
  exports: [ IconSidebarComponent ]
})
export class IconSidebar {}
