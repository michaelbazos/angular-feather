import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-git-merge',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-git-merge">
    <circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>
  </svg>`
})
export class IconGitMergeComponent {}

@NgModule({
  declarations: [ IconGitMergeComponent ],
  exports: [ IconGitMergeComponent ]
})
export class IconGitMerge {}
