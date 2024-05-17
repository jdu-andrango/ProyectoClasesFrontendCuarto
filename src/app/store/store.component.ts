import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {
  items :any[]= [];

  constructor( private Cartservices: CartService) {

  }

  ngOnInit():void {
    this.items = this.Cartservices.getItem()
  }
}
