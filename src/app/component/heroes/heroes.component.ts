import { Component } from '@angular/core';
// import {HEROES} from '../../classes/hero-list';
import { Hero } from '../../classes/hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  // heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Jhon'
  }
}
