import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ResulradoComponent } from './componentes/resulrado/resulrado.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ResulradoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
