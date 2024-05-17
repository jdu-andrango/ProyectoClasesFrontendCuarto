import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cartItems : any []=[];
// products: any []=[
//   {
//     name:'coca cola',
//     precio:45,
//     imagen:'../../assets/images/coca-cola.webp'
//   },
//   {
//     name:'pepsi',
//     precio:60,
//     imagen:'../../assets/images/pepsi.png'
//   }
// ];

// cosas:any[]=[
//   {
//     nombre:'jonathan',curso: 'cuarto'
//   },
//   {
//     nombre:'luis',curso:'quinto'
//   }
// ]



constructor(private readonly CartService:CartService){


}

ngOnInit():void{
  this.CartService.getItems().subscribe(items => this.cartItems = items)
}

onClicAdd(item:any):void{
  this.CartService.addItem(item).subscribe(items => this.cartItems = items)
}

onClickDelete(itemId: number):void{
  this.CartService.removeItem(itemId).subscribe(()=> console.log('removido'))
}

onClickClear():void{
  this.CartService.clearCart().subscribe(()=> console.log(' removida toda la lista'))
}

addCosa(cosita:any):any{
  this.CartService.addCosa(cosita)
}

addToCart(product:any):void{
  this.CartService.addItem(product);
}

}
