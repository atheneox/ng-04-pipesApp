import { Pipe, PipeTransform } from '@angular/core';
import { Color, Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(heroes: Heroe[], sortBy: string = 'no value'): Heroe[] {
    
    console.log(sortBy);

    switch (sortBy) {
      case 'name': return heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
      case 'color': return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
      case 'flying': return heroes.sort((a, b) => (a.flying > b.flying) ? 1 : -1);
      default: return heroes;
    }
  }
}
