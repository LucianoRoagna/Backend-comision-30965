// 1
function mostrarLista(lista){
    if(lista.length === 0){
console.log('lista vacia')
}else{
    console.log(lista)
}
}

 mostrarLista([1,2,3])
 mostrarLista([]);


// 2
(function(lista){
    if(lista.length === 0){
        console.log('lista vacia')
    }else{
        console.log(lista)
    }
})([4,5,6])


//3
function crearMultiplicador(num1){
    return function(num2){
        return num1 * num2
    }
}

const duplicar = crearMultiplicador(2)

console.log(duplicar(6))
console.log(duplicar(4))


const triplicar = crearMultiplicador(3)
console.log(triplicar(6))
console.log(triplicar(4))




