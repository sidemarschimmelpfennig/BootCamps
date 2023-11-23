//DataModifiers responsavel pelo encapsulamento =========================
//private ======somente a classe 
// protected ========= classe e suas subclasses 
//publico == totalmente visivel 


/*
public
private
protected
*/

class joao {
    private name : string ;
    public power : number;


    constructor (name : string , power : number){
        this.name = name
        this.power = power
    }

    protected actack() : void {
        console.log(`teste de metodos de dataModifiers`)
    }
}

const p1 = new joao("teste", 121213)