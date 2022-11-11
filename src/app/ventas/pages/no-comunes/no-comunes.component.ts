import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  
})
export class NoComunesComponent   {


  // i18nSelect
  nombre: string = 'Cris';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Cristian','Javi','Mario','Jeny','Maria'];
  clientesMap = {
    '=0': 'no hay ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2  clientes esperando.',
    'other' : 'tenemos # clientes esperando.'

  }

  cambiarCliente() {
   this.nombre = 'Melissa';
   this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();

  }

  //KeyValue Pipe

  persona = {
    nombre:'Cris',
    edad:25,
    direccion:'Madrid,Spain'
  }

  //JsonPipe
  heroes = [
    {
      nombre:'Superman',
      vuela:true

    },
    {
      nombre:'Robin',
      vuela:false

    },
    {
      nombre:'Aquaman',
      vuela:false

    },
  ];

  //Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise(  (resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos Data de promesa')
    },3500);
  });



}
