import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items : any []= [];
  private cosa:any []=[];
  
  
  private apiUrl = 'https://api.myecomerce.com'
  constructor(private http:HttpClient ) {
 
   }
  
  addItem(item:any):void{
    
    
    this.items.push(item);

  }
  
  getItems():Observable<any[]>{
    const url = `${this.apiUrl}`;
    return this.http.get<any[]>(url)
  }

  addItems(item:any):Observable<any>{
    const url = `${this.apiUrl}`;
    return this.http.post(url,item);
  }
 // removeItems(id: number):Observable<any>{
 //   const url = `${this.apiUrl} ${id}`;
 //   return this.http.delete<void>(url);
 // }
  
  clearCart():Observable<void>{
    const url = `${this.apiUrl}`;
    return this.http.delete<void>(url);
  }




  addCosa(cos:any):any{
    this.cosa.push(cos)
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
}
