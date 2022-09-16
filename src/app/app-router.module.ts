import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BasicComponent } from './sales/pages/basic/basic.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { SortComponent } from './sales/pages/sort/sort.component';

const routes: Routes = [

  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'sort',
    component: SortComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
