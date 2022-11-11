import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'cristian turx';
  valor:number = 1000
  obj = {
    nombre:'cristian'
  }
  
  mostrarNombre(){
    console.log(this.nombre)
    console.log(this.nombre)
  }
}
