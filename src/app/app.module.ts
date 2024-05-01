import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// importaciones de los componentes de primeng

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    
    FormsModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
