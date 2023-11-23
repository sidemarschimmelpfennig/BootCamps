///funcoes
function addNumber (numOne : number, numberTwo : number ) : number{
    return numOne + numberTwo;
}


console.log(addNumber(1, 2).toString())


///funcoes Multliplos tipos 
function callPhone (phone : number | string){//ou any de retorno number | string 
    return phone
}

console.log(callPhone(2303003033030))


//funcoes async 


async function  cls(id : number) : Promise<string> {
    return "felipe"

}


