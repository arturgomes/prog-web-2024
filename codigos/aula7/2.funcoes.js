function soma(a, b) {
  return a + b;
}

// const soma2 = function (a, b) {
//   return a + b;
// };

// console.log(soma(1, 2) === soma2(1, 2));


// const soma3 = (a, b) => a + b;
// const soma4 = (a, b) => {
//   return a + b;
// };

// console.log(soma3(1, 2) === soma2(1, 2));



// console.log(soma5(1, 2, 3));

function dobro(a) { return a * 2; }

const dobroVetor = [1,3,5,7].map(a => a * a * a)
console.log("🚀 ~ dobroVetor:", dobroVetor)
const par = a => a%2===0
const numerosPares = [1,2,3,4,5,6,7].filter(par)
console.log("🚀 ~ numerosPares:", numerosPares)
const somatorio = [1,2,3,4,5,6,7].reduce(soma,0)
console.log("🚀 ~ somatorio:", somatorio)


