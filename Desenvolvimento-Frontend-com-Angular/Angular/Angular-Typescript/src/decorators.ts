//decorators 
function ExibirNome(target : any){
    console.log(target)
} 

@ExibirNome
class Funcionario {

}


@ExibirNome
class ETs{}


function apiVersion(version : string){
    return(target : any) =>{
        Object.assign(target.prototype, {__version : version})
    }
}

@apiVersion("1.0.0")
class Api{}

const api = new Api()
console.log(api.__version)

function minLength (length : number){
    return(target : any , key : string) =>{
        let _value = target[key]
        const getter= () =>"[leitura] " + _value
        const setter = (value : string) =>{
            if (value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value
            }
            
        }
        Object.defineProperty(target, key, {
            get : getter,
            set : setter
        })
    }
}

class testeGetSet {
    @minLength(4)
    name :string
    constructor (name  : string){
        this.name = name
    }
}


const testar = new testeGetSet("Joao")
console.log(testar.name) 
