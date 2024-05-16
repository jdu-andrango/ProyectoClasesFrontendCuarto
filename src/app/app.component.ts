import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';
import { EjemploService } from './ejemplo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent  {

   constructor( private readonly EjemploService: EjemploService){
    EjemploService.imprimir();
   }
}
