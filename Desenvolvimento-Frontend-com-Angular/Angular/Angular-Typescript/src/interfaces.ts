// interfaces (type x interface) principalmente para classe o interface e basicamente um contrato //adicionar interface ctrl + .

interface robot {
    id : number
    name : string
}


const bot : robot = {
    id : 1,
    name : "paulo"
}

console.log(bot)


class Pessoa implements robot {
    id: number;
    name: string;

    constructor(id: number, name:string ){
        this.id = id
        this.name=name 
    }
    sayHello(): string {
        return "hello"
    }

}