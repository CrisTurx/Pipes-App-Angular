import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
 
})
export class OrdenarComponent  {

  enMayusculas : boolean = true;

  ordenarPor: string='nombre'; 

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul

    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro

    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo

    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde

    },
  ]

  


  cambiar(){
   this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    
  }
}
