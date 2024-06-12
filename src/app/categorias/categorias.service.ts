import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catergoria } from './categoria/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl:string='http://localhost:3000/categorias'

  constructor(
    private readonly url:HttpClient
  ) { }

  categoriasNest():Observable<Catergoria[]>{
    return this.url.get<Catergoria[]>(`${this.apiUrl}`)
  }

}
