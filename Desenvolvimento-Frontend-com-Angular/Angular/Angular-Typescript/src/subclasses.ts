class subClasses {
    protected name : string ;
    public power : number;


    constructor (name : string , power : number){
        this.name = name
        this.power = power
    }
}

class sub extends subClasses{
    classesSub : number
    constructor(name : string, power : number, classesSub : number){
        super(name , power)
        this.classesSub = classesSub
    }
} 

const teste = new sub("joao",120,1 )