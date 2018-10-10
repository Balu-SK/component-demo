import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {APP_BASE_HREF} from '@angular/common';


import { ParentComponent } from '../parent/parent.component';
import { HeroDetailComponent } from './hero-detail.component';
import { SearchComponent } from '../search/search.component';
import { HEROES } from "../mock-heroes";
import { HeroService }  from '../hero.service';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroService;
  let getHeroesSpy;

  beforeEach(async(() => {

    heroService = jasmine.createSpyObj('HeroService', ['getHeroes', 'getHero']);
    getHeroesSpy = heroService.getHeroes.and.returnValue( of(HEROES) );

    TestBed.configureTestingModule({
      declarations: [ ParentComponent, HeroDetailComponent, SearchComponent ],
      imports: [FormsModule, AppRoutingModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, { provide: HeroService, useValue: heroService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
