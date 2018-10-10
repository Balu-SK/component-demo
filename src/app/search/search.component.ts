import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() onFilter = new EventEmitter<Hero[]>();

  constructor() { }

  ngOnInit() {}

  search( term ): void{
    let filtered = this.heroes.filter(( hero )=>{
      return hero.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });
    this.onFilter.emit(filtered);
  }

}
