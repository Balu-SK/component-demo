import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  heroes: Hero[] = [];
  allHeroes: Hero[] = [];

  constructor( private heroService: HeroService ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.allHeroes = heroes;
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero);
  }

  updateResult( heroes: Hero[] ){
    if( heroes.length ){
      this.heroes = heroes;
    }
    else{
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }
  }

}
