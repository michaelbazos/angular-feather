import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-bookmark',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/bookmark.svg'
})
export class IconBookmarkComponent {}

@NgModule({
  declarations: [ IconBookmarkComponent ],
  exports: [ IconBookmarkComponent ]
})
export class IconBookmark {}
