import { Component } from '@angular/core';
import { Message, PrimeNGConfig, MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrl: './form-first.component.css'
})
export class FormFirstComponent {
  title = 'jonathanTest';
  name: string = '';
  email: string = '';
  birthdate: Date | "";
  password : string | number = "";
  errormess: Message[]=[];
  userName : string = "";
  telefono : string |number = "";


  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.name = '';
    this.email = '';
    this.birthdate = "";
    this.password = "";
    this.userName = "";
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  onSubmit() {
    console.log('form submited'),
    console.log('name', this.name),
    console.log('email', this.email),
    console.log('byrthdate', this.birthdate)
  }
  addMessages(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Bien',
      detail: 'nombre: ' + this.name + '   ' + 'email: ' + this.email + '   ' + this.birthdate
    });

    //imprimir en consola los datos
    console.log('formulario enviado'),
    console.log('nombre', this.name),
    console.log('email', this.email),
    console.log('cumples', this.birthdate)
    //limpiar despues de escribir los datos
    this.name = '';
    this.email = '';
    this.birthdate = "";
  }

  mensajeError(): void{
    if (this.name.trim() === " " || this.email.trim() === " " || !this.birthdate )
    {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'nombre: Datos Incompletos ' + this.name + '   ' + 'email: Datos Incompletos ' + this.email + '   ' + this.birthdate
      });
      console.log('datos incompletos')

    } else {
      this.errormess=[
        {
          severity: 'success',
          summary: 'exito',
          detail: 'nombre: ' + this.name + ' user Name '+ this.userName + '   ' + 'email: ' + this.email + ' password  ' +' telefono '+this.telefono+   this.password +' cumple  '  + this.birthdate
        }
      ]
    console.log('formulario enviado'),
    console.log('nombre  =', this.name),
    console.log('user Name  =', this.userName)
    console.log('email  =', this.email),
    console.log('cumples  =', this.birthdate)
    console.log('password  =', this.password)
    console.log('Bien')
    this.name = '';
    this.email = '';
    this.password = "";
    this.birthdate = "";
    this.telefono = "";
    }

  }

}
