import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactos } from './llamadas/contactos.interface';


@Injectable({
  providedIn: 'root'
})
export class LlamadaService {

  private apiUrl: string= 'http://localhost:3000/llamada'

  constructor(
    private  http:HttpClient

  ) {
    // console.log('Servicio Funcionando de llamada')
  }


  traerDato():Observable<Contactos[]>{
    return this.http.get<Contactos[]>(`${this.apiUrl}`)
  }

}
