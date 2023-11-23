import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector    : 'teste-component',
  templateUrl : './teste.component.html',
  styleUrls   : ['./teste.component.css']
})

export class TitleComponent implements OnInit, OnChanges{
  nome : string = 'Sidemar'

  constructor (){}
    ngOnInit(){
      this.nome = `ola ${this.nome}`

      //momento de vida inicial do componente tipo o onshow ou o create do delphi
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
