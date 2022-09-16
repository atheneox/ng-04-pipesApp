import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html'
})
export class SortComponent {

  // way 1;
  // value: string = 'US';

  // switchCapitalLetter() {
  //   this.value === this.value.toUpperCase() ? this.value = this.value.toLowerCase() : this.value = this.value.toUpperCase();
  // }

  // way 2
  // isCapitalLetter: boolean = false;

  // switchCapitalLetter() {
  //   this.isCapitalLetter ? this.isCapitalLetter = false : this.isCapitalLetter = true;
  // }

  // way 3

  isCapitalLetter: boolean = false;

  switchCapitalLetter() {
    this.isCapitalLetter = !this.isCapitalLetter;
  }

  sortBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flying: false,
      color: Color.red
    },
    {
      name: 'Daredevil',
      flying: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      flying: true,
      color: Color.green
    }
  ];

  changeSort(value: string) {
    this.sortBy = value;
    // console.log(this.sortBy);
  }
}
