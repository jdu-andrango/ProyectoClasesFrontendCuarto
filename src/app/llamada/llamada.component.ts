import { Component } from '@angular/core';
import { LlamadaService } from './llamada.service';
import { Contactos } from './llamadas/contactos.interface';

@Component({
  selector: 'app-llamada',
  templateUrl: './llamada.component.html',
  styleUrl: './llamada.component.css'
})
export class LlamadaComponent {
   public contactos:Contactos[]=[]
  constructor(
    private readonly llamadaService:LlamadaService
  ){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.llamadaService.traerDato().subscribe(contactos=>{
      this.contactos=contactos
    })

  }








}
