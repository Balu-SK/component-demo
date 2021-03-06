import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent }  from './parent/parent.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [

  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
  { path: 'dashboard', component: ParentComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
