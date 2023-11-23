import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaviewComponent } from './listaview/listaview.component';
import { InputlistaComponent } from './inputlista/inputlista.component';



@NgModule({
  declarations: [
    ListaviewComponent,
    InputlistaComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ListaviewComponent,
    InputlistaComponent
  ]
})
export class ListaModule { }
