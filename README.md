### Creacion de un proyecto modular(que si tenga en app.module.ts)

```
ng new nombreProyecto --standalone=false
```

# Primeros Pasos:

## Clonacion del proyecto

nombre del proyecto:

ProyectoClasesFrontendCuarto

```
git clone  https://github.com/jdu-andrango/ProyectoClasesFrontendCuarto.git
```

- una ves clonado el repositorio se procede a abrirlo en visual estudio code
- En visual estudio code abrimos una terminal y colocamos los siguientes comandos

### instalacion de modulos npm

los modulos de node son muy importantes de instalar al iniciar el proyecto, ya que estos
no se guardan en el repositorio de github

```
npm install
```

### instalacion del cdk de angular

```
npm install @angular/cdk
```

### instalar la libreria primeng

primeng es una libreria de componentes para angular
[https://primeng.org/]

```
npm install primeng
```

```
npm install primeng primeicons
```

```
npm install @angular/animations
```

### Importacion de configuraciones de primeng

se debe importar PrimeNGConfig que es la coniguracion de primeng en el proyecto

es importante reslatar que esta configuracion va en app.component.ts

```
import { PrimeNGConfig } from 'primeng/api';
```

el siguiente fragmento de codigo es para la configuracion solo de prime ng y lo agregaremos a nuestro app.component.ts

```
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
```

### Colocar los modulos recomendadas para el css de primeng en el archivo angular.json

se debe buscar la dependencia styles que se encuentra asi en el archivo angular.json

```
"styles": [
              "src/styles.css"
            ],
```

ahora le agregamos las dependencias de primeng

```
 "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
 "node_modules/primeng/resources/primeng.min.css"
```

El resultado quedaria asi:

```
"styles": [
              "src/styles.css",
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
```

ahora agregamos las importaciones de primeng en el archivo styles.css

```
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
```

Ahora ya tenemos instalado y configurado primeng

### implementar componentes de primeng ejemplo button

importamos el modulo de button en nuestro archivo de app.modulo.ts

```
import { ButtonModule } from 'primeng/button';
```

una ves importado se debe agregar el modulo colocando una coma y a continuacion ButtonModule todo esto en el app.module.ts

```
imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
```

ahora solo procedemos a utilizar el Button de primeng con la sintaxis especial de primeng para que funcione esto lo haremos en el archivo app.component.html

```
<p-button label="Submit"></p-button>
```

# servicios 
los servicios son utilizados para compartir **Datos** 

# Enrutamiento utilizando anglar dex
esto nos ayuda a reorganizar los modulos y rutas de nuestro proyecto
## enrutamientos con rutas hijas 

### Estrategias para compartir datos 
Con el uso de metodos HTTP para peticiones del servidor o del backend de nuestra aplicacion.







# ProyectoClasesFrontendCuarto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
