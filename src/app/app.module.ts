import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
  
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
