//generics
function concatArrray(...itens : any[]):any[] {
    return new Array().concat(...itens)
}


const numArray = concatArrray([1,5], [3])
numArray.push("teste")
console.log(numArray)


function concatArrrayT<T>(...itens : T[]): T[] {
    return new Array().concat(...itens)
}

const numArray1 = concatArrrayT<number[]>([1,5], [3])
console.log(numArray1)