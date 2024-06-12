import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';



@NgModule({
  declarations: [
    CategoriasComponent
  ],
  exports:[
    CategoriasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CategoriasModule { }
