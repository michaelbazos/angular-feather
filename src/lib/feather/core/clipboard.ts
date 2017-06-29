import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-clipboard',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/clipboard.svg'
})
export class IconClipboardComponent {}

@NgModule({
  declarations: [ IconClipboardComponent ],
  exports: [ IconClipboardComponent ]
})
export class IconClipboard {}
