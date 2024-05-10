import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  protected nameControl : FormControl = new FormControl<string> ("juan "); 
  protected ageControl : FormControl = new FormControl<number> (0); 
  protected form : FormGroup = new FormGroup(/*controls :*/{
   // name:"juan",
   // age: 3
  })

constructor(){}

validarForm():void{
  if (this.nameControl.valid && this.ageControl.valid) {
    alert("valido")
  }else{
    alert("error")
  }
}
}
