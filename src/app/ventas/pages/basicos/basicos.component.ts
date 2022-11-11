import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})
export class BasicosComponent  {

  nombreLower: string = 'cris';
  nombreUpper: string = 'CRIS';
  nombreCompleto: string = 'CrIS tUrX';

  fecha: Date = new Date(); // Dia actual

  
}
