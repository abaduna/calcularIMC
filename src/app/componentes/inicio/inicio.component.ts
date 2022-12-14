import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 25
  peso = 60
  altura = 170
  sexo = "masculino"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cambiarAltura(event:any){
    this.altura = event.target.value
    
  }
  masculino()
  {
    this.sexo = "masculino"
  }
  femenino()
  {
    this.sexo = "femenino"
  }
  calcularMI(){
    // calculamos
  const bmi = this.peso/Math.pow(this.altura/100,2)
 
    //redirecionar a resultado 
    this.router.navigate(["/resultado",bmi.toFixed(2)])
  }
}

