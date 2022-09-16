import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicComponent } from './pages/basic/basic.component';
import { SortComponent } from './pages/sort/sort.component';
import { capitalLettersPipe } from './pipes/capitalLetters.pipe';
import { flyingPipe } from './pipes/flying.pipe';
import { SortPipe } from './pipes/sort.pipe';





@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    SortComponent,
    capitalLettersPipe,
    flyingPipe,
    SortPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
