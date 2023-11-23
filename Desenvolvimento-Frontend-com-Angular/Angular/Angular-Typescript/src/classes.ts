///classes

class personagem{
    name?: string ; ///quando e opcional recebe tambem o ?
    power: number;
    skill: number;
    constructor(name :string , power : number , skill : number){
        this.name = name
        this.power = power
        this.skill = skill
    }    
    atack():void{
        console.log(`atack whit ${this.power} points `)
    }
}