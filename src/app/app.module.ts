// importaciones de @angular
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// importaciones de Routin module o rutas
import { AppRoutingModule } from './app-routing.module';

// importaciones de los componentes 
import { AppComponent } from './app.component';

// importaciones de los componentes de primeng
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from "primeng/autocomplete";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

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
    InputTextModule,
    ButtonModule,
    MessagesModule
  ],
  providers: [
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
