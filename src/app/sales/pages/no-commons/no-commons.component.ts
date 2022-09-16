import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html'
})
export class NoCommonsComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }



  // i18nSelect
  // name: string = 'Susana';
  // gender: string = 'female';

  name: string = 'Neox';
  gender: string = 'male';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  // i18nPlural
  customers: string[] = ['María', 'Pedro', 'Karla', 'Eduardo', 'Fernándo'];

  customerMap = {
    '=0': 'we currently have no customers waiting',
    '=1': 'we currently have a customers waiting',
    '=2': 'we currently have 2 customers waiting',
    'other': 'we currently have # customers waiting'
  }

  changeCustomer() {

    this.name = 'Kalash';
    this.gender = 'female'

  }

  deleteCustomer() {

    this.customers.pop();

  }

  // Keyvalue pipe
  customer = {
    name: 'Neox Mint',
    age: 30,
    address: 'Colombia, Medellín'
  }

  //json pipe
  heroes = [
    {
      name: 'Superman',
      vuela: true

    },
    {
      name: 'Robin',
      vuela: false

    },
    {
      name: 'Aquaman',
      vuela: false

    }
  ]

  myObservable = interval(5000);
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('we have date of promise');
    }, 3500);
  });

}
