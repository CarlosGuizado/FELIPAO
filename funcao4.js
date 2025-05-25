// let resultado = soma(5,6)

// console.log("O resultado desta função é " + resultado)

// function soma(numA, numB){
//    let somatorio = numA + numB
//    return somatorio
// }

// COMO SEPARAR O PRIMEIRO NOME 

let userName = getFirstName("Carlos Eduardo Badin Guizado")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]  // SPLIT SERVER PARA SEPARAR (CARACTER QUE SERVIRÁ DE SEPARADOR) [POSIÇÃO NA TUPLA]
    return firstName
}

// Exemplo criando um parâmetro para separar a primeira palavra

let userName2 = getFirstName2("Maria das Couves"," ")
console.log("Seja bem vindo " + userName2)

userName2 = getFirstName2("Mário-de-Almeida" , "-")
console.log("Seja bem vindo " + userName2)

function getFirstName2(name, splitchar){
    let firstName2 = name.split(splitchar)[0]
    return firstName2
}
