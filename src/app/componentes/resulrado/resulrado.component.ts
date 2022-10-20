import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resulrado',
  templateUrl: './resulrado.component.html',
  styleUrls: ['./resulrado.component.css']
})
export class ResulradoComponent implements OnInit {
  resultado: string;
  interpretacion: string;
  bmi: number;

  constructor(private route: ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getresultado
  }
  getresultado(){
    if(this.bmi >= 25){
      this.resultado = "exceso de peso"
      this.interpretacion = "hace ejercio"
    }else if (this.bmi >= 18.5){
      this.resultado = "normal"
      this.interpretacion = "segui haci"
    }else {
      this.resultado = "bajo peso"
      this.interpretacion = "hace dieta"
    }
  }
}
