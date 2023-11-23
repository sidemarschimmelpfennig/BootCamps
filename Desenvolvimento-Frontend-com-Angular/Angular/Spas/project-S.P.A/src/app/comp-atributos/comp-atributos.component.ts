import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo :string = "disabled"
  corfundo :string = "#FFBB33"
  item :string = ""
  lista :string[] = []
  constructor (){

  }
  ngOnInit(): void {

  }
  adicionarLista(){
    this.lista.push(this.item)
  }

  mudaCor(){
    if(this.estilo == "disabled"){
      this.estilo = "enabled"
    }
    else if(this.estilo == "enabled"){
      this.estilo = "disabled"
    }
  }

}
