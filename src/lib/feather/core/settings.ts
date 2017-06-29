import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-settings',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/settings.svg'
})
export class IconSettingsComponent {}

@NgModule({
  declarations: [ IconSettingsComponent ],
  exports: [ IconSettingsComponent ]
})
export class IconSettings {}
