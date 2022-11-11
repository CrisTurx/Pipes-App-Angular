import { NgModule } from '@angular/core';

//Prime NG
 import {ButtonModule} from 'primeng/button';
 import {Card, CardModule} from 'primeng/card';
 import {FieldsetModule} from 'primeng/fieldset';
 import {ToolbarModule} from 'primeng/toolbar';
 import {TableModule} from 'primeng/table';

 import {MenubarModule} from 'primeng/menubar';



@NgModule({
  
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    ToolbarModule,
    TableModule,
    MenubarModule 
    
    
  ]
})
export class PrimeNgModule { }
