import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-film',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/film.svg'
})
export class IconFilmComponent {}

@NgModule({
  declarations: [ IconFilmComponent ],
  exports: [ IconFilmComponent ]
})
export class IconFilm {}
