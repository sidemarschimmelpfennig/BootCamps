import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    produtos : string[] = [];
    menuType : string = "user"
    constructor (){
      this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte",
      "monitor",
      "estabilizador",
      "mesa",
      "headset",
      ]
    }
    ngOnInit(): void {

    }
    adicionar(){
      this.produtos.push("teste")
    }
    remover(){
      this.produtos.pop()
    }
    alertar(index : number){
      this.produtos.splice(index, 1)

    }
}
