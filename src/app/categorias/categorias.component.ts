import { Component } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Catergoria } from './categoria/categoria.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  public categorias:Catergoria[]=[]
  public ricks:any[]=[]
  constructor(
    private readonly categoriasService:CategoriasService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoriasService.categoriasNest().subscribe(categorias=>{
      this.categorias=categorias
    })

  }
}
