import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl:string = 'http://localhost:3000/products'
  constructor(private http:HttpClient) { }


  TraerProducto():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/servicio`)
  }
  enviarDatosAngular(product:any):Observable<any[]>{
    return this.http.post<any[]>(this.apiUrl, product)

  }
}
