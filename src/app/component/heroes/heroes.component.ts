import { Component } from '@angular/core';
import {HEROES} from '../../classes/hero-list';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
}
