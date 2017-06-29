import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-external-link',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/external-link.svg'
})
export class IconExternalLinkComponent {}

@NgModule({
  declarations: [ IconExternalLinkComponent ],
  exports: [ IconExternalLinkComponent ]
})
export class IconExternalLink {}
