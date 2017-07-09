import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-speaker',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/speaker.svg'
})
export class IconSpeakerComponent {}

@NgModule({
  declarations: [ IconSpeakerComponent ],
  exports: [ IconSpeakerComponent ]
})
export class IconSpeaker {}
