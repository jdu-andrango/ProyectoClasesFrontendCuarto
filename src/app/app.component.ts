import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'jonathanTest';
  name: string = '';
  email: string = '';
  birthdate: Date = new Date;

  constructor(private primengConfig: PrimeNGConfig) {
    this.name = '';
    this.email = '';
    this.birthdate = new Date;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  onSubmit() {
    console.log('form submited'),
      console.log('name', this.name),
      console.log('email', this.email),
      console.log('byrthdate', this.birthdate)
  }

}
