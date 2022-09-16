import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent {

  nameLower: string = 'neox';
  nameUpper: string = 'NEOX';
  fullName: string = 'NeoX MInt';

  date: Date = new Date();

}
