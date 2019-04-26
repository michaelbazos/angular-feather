import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-briefcase',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-briefcase">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>`
})
export class IconBriefcaseComponent {}

@NgModule({
  declarations: [ IconBriefcaseComponent ],
  entryComponents: [ IconBriefcaseComponent ],
  exports: [ IconBriefcaseComponent ]
})
export class IconBriefcase {}
