import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
//  protected nameControl : FormControl = new FormControl<string> ("juan ");
//  protected ageControl : FormControl = new FormControl<number> (0);
//  protected form : FormGroup = new FormGroup(/*controls :*/{
//   // name:"juan",
   // age: 3
//  })
//
//constructor(){}

//validarForm():void{
//  if (this.nameControl.valid && this.ageControl.valid) {
//    alert("valido")
//  }else{
//    alert("error")
//  }
//}



// formulario reactivo




private formBuilder: FormBuilder=inject(FormBuilder);
  messageService: any;

 // form: FormGroup;

//  constructor() {
//    this.form=this.buildForm
//  }
  get buildForm():FormGroup{
    return this.form = this.formBuilder.group({
      name: ['Juan', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      age: ['', Validators.required],
      password:['',Validators.required, Validators.minLength(2),Validators.maxLength(50)],
      city:['',Validators.required, Validators.minLength(2),Validators.maxLength(50)],
      codigoPostal:['',Validators.required]
    });
  }
  validarForm(): void {
    if (this.form.valid) {
      alert("Formulario válido");
    } else {
      alert("Formulario inválido");
    }
  }



  private formBuilderConstructor: FormBuilder=inject(FormBuilder);

  form: FormGroup;

  constructor() {
    this.form=this.buildFormConstructor
  }
  get buildFormConstructor():FormGroup{
    return this.form = this.formBuilderConstructor.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      age: ['',[ Validators.required] ],
      password:['',Validators.required, Validators.minLength(2),Validators.maxLength(50)],
      city:['',Validators.required, Validators.minLength(2),Validators.maxLength(50)],
      codigoPostal:['',Validators.required]
    });
  }


 validarForm2(): void {
  if (this.form.controls['name'].invalid) {
    alert("Por favor, ingresa el nombre.");
  } else if (this.form.controls['age'].invalid) {
    alert("Por favor, ingresa la edad.");
  } else if (this.form.controls['password'].invalid) {
    alert("Por favor, ingresa la contraseña.");
  } else if (this.form.controls['city'].invalid) {
    alert("Por favor, ingresa la ciudad.");
  } else if (this.form.controls['codigoPostal'].invalid) {
    alert("Por favor, ingresa el código postal.");
  } else {
    alert("Formulario válido");
  }
}




validarForm3(): void {
  if (this.form.controls['name'].invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'Por favor, ingresa el nombre.'
    });
  } else if (this.form.controls['age'].invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'Por favor, ingresa la edad.'
    });
  } else if (this.form.controls['password'].invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'Por favor, ingresa la contraseña.'
    });
  } else if (this.form.controls['city'].invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'Por favor, ingresa la ciudad.'
    });
  } else if (this.form.controls['codigoPostal'].invalid) {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'Por favor, ingresa el código postal.'
    });
  }  else {
    alert("Formulario válido");
  }
}

}
