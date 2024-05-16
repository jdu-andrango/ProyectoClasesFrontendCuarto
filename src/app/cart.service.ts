import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items : any []= [];

  addItem(item:any):void{
    this.items.push(item);
  }
  removeItem(index : number):void{
    this.items.splice(index,1);
  }
  getItem():any[]{
    return this.items
  }
  clearItem():void {
    this.items= [];
  }
  constructor() {

   }
}
