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

    heroService = jasmine.createSpyObj('HeroService', ['getHeroes', 'getHero', 'deleteHero']);
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

  it('should contain 10 heroes - ON INIT', () => {
    component.getHeroes();
    expect( component.allHeroes.length ).toEqual(10);
  });

  it('should filter first 3 heroes - ON SEARCH', () => {
    component.updateResult( component.allHeroes.slice(0,3));
    expect( component.heroes.length ).toEqual(3);
  });

  it('should delete Mr.Nice list - ON DELETE', () => {
    component.delete( component.heroes[0] );
    expect( component.heroes[0].name ).toEqual("Narco");
  });

});
