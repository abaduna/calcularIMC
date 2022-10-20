import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ResulradoComponent } from './componentes/resulrado/resulrado.component';

const routes: Routes = [
{path:"/", component: InicioComponent},
{path:"/resultado", component:  ResulradoComponent}

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
