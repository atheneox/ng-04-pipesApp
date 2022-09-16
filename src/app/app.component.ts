import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'pipesApp';
  name: string = 'neox mint';
  value: number = 1000;
  obj = {
    'name': 'neox mint'
  }

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
