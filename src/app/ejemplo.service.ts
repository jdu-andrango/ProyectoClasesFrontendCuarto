import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  private apiUrl = 'http://localhost:3000';

  imprimir(){

    // return console.log('servcicio funcionando')
  }
  constructor(private http: HttpClient) {
    // console.log('Servicio Funcionando')
  }

  // getUsers(): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/users`);
  // }


}
