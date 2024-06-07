import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  {
  public productos:any[]=[];
  public ProductoNuevo:any[]=[{

  }]
  
  constructor( private readonly productServices:ProductsService){
  }
  ngOnInit():void{
    this.productServices.TraerProducto().subscribe(productos=>{
      this.productos = productos
    })
   
    
  }
 // mostrar():any{
 //   return this.productServices.TraerProducto()
 // }
 enviarDatos(){
    this.productServices.enviarDatosAngular(this.ProductoNuevo).subscribe(()=>{
      console.log('se a enviado el producto')
    })
 }


}
