import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlamadaComponent } from './llamada.component';
import { LlamadaService } from './llamada.service';



@NgModule({
  declarations: [
    LlamadaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LlamadaComponent
  ],
  providers:[
    LlamadaService
  ]
})
export class LlamadaModule { }
