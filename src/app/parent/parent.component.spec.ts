import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule }    from '@angular/common/http';

import { ParentComponent } from './parent.component';
import { SearchComponent } from '../search/search.component';
import { HeroService } from '../hero.service';

import { HEROES } from "../mock-heroes";

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let heroService;
  let getHeroesSpy;

  beforeEach(async(() => {


    heroService = jasmine.createSpyObj('HeroService', ['getHeroes', 'getHero']);
    getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );

    TestBed.configureTestingModule({
      declarations: [ ParentComponent, SearchComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: HeroService, useValue: heroService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
