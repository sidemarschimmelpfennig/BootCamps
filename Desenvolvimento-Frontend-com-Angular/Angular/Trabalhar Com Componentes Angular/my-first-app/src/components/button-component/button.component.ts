import {Component, Input} from '@angular/core';

const numbers : Number = 1;
@Component({
        selector    : 'my-Button',
        templateUrl : './button.component.html',
        styleUrls   :   ['./button.component.css']
     }
)

export class Button{
        @Input () label : String = '';
        buttonText : String = `Acessar valor :  ${numbers.toString()}`;
        buttonTexts : String[] = ['Vender', 'Comprar'];
        buttonNumber : number = 1;
        buttonObject = {
                label : 'adiciona ao carrinho'
        };
        getAlert (num : number){
                alert(`Ola Mundo,  ${num} `)
        }

}