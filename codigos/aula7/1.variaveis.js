// Neste artigo, discutiremos var, let e const em 
// relação ao seu escopo, uso e elevação.Enquanto 
// você lê, tome nota das diferenças entre eles 
// que vou apontar.;


// var minhaVar = "ola mundo";
// console.log("🚀 ~ minhaVar:", minhaVar)
// minhaVar = 2;
// console.log("🚀 ~ minhaVar 2:", minhaVar)

// let greeting = "diga oi";
// console.log("🚀 ~ greeting:", greeting)
// let vezes = 4;
// if (vezes > 3) {
//   let hello = "diga Olá em vez disso";
// 	console.log(hello);// "diga Olá em vez disso"
// }

// console.log("segundo hello", hello) // hello não está definido


//  greeting = "diga oi2";
//  console.log("🚀 ~ greeting:", greeting)
// greeting = "diga Olá em vez disso";
// console.log("🚀 ~ greeting:", greeting)


// let greeting1 = "diga oi";
// // if(true) {
// //     let greeting = "diga Olá em vez disso";
// //     console.log(greeting); // "diga Olá em vez disso"
// // }
// // console.log(greeting); // "diga oi"

// const greeting = "diga oi";
// const greeting2 = "diga Olá em vez disso";// erro: Atribuição à variável constante.


// let prog_web;
// prog_web = "JavaScript";
// console.log(prog_web);
// prog_web = "Python";
// console.log(prog_web);
// // prog_web = 1;
// console.log(prog_web);

// const pi = 3.14;
// console.log("🚀 ~ pi:", pi)


/**
 * Me de um exemplo de struct em C
 */
// const noh = {
//   valor: 3,
//   esq: {
//     valor: 2,
//     esq: null,
//     dir: null
//   },
//   dir: {
//     valor: 4,
//     esq: null,
//     dir: null
//   }
// };
// const noh1 = {
//   valor: 5,
//   esq: noh,
//   dir: {
//     valor: 6,
//     esq: null,
//     dir: null
//   },
// }
// console.log("🚀 ~ noh1:", noh1)
// //função para percorrer preordem
// function preordem(noh) {
//   if (noh) {
//     preordem(noh.esq);
//     preordem(noh.dir);
//     console.log(noh.valor);
//   }
// }
// console.log(preordem(noh1))


// const cartaoVisita = {
//   destinatario: "Artur",
//   mensagem: "boas vindas"
// };

// console.log(cartaoVisita)

// cartaoVisita.destinatario = "3";

// console.log(cartaoVisita);


// let frutas = ["Maçã", "Banana", "Morango"];
// console.log(frutas[0]); // Maçã
// console.log(frutas[1]); // Banana
// console.log(frutas[2]); // Morango


// // declara um array com diferentes tipos de dados
// let arr = [1, 2, 3, "quatro", true, {nome:"artur"}]; 
// console.log(arr); // acessa o primeiro elemento do array

let anagramas = ["cat", "tac"];
console.log("🚀 ~ anagramas:", anagramas)
let var2 = anagramas.map(elem => elem.split(""));
console.log("🚀 ~ var2:", var2);
let order = var2.map(elem => elem.sort())
console.log("🚀 ~ order:", order)
let join = order.map(elem => elem.join(""))
console.log("🚀 ~ join:", join)

let an = anagramas.map(elem => elem.split("").sort().join(""))
console.log("🚀 ~ an:", an)

