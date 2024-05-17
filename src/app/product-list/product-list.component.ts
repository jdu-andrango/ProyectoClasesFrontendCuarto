import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products: any []=[
  {
    name:'coca cola',
    precio:45,
    imagen:'../../assets/images/coca-cola.webp'
  },
  {
    name:'pepsi',
    precio:60,
    imagen:'../../assets/images/pepsi.png'
  }
];

constructor(private readonly CartService:CartService){


}

addToCart(product:any):void{
  this.CartService.addItem(product);
}

}
