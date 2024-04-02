
let variavelQualquer : any

variavelQualquer = 10
console.log("🚀 ~ variavelQualquer:", variavelQualquer)
variavelQualquer = "Ola"
console.log("🚀 ~ variavelQualquer:", variavelQualquer)
variavelQualquer = true
console.log("🚀 ~ variavelQualquer:", variavelQualquer)


interface Noh {
  valor:number | string
  prox: Noh | null
}
const novoNoh:Noh = {
  valor: 30,
  prox: null
}

const novoNoh2:Noh = {
  valor: "trinta",
  prox: novoNoh
}
console.log("🚀 ~ novoNoh2:", novoNoh2)

interface Pessoa {
  nome: string;
  rga: string;
  pontos: number;
  disciplinas?: Disciplina[]
}
const imprimeUmObjetoPessoa = (nome:string,rga:string,pontos:number) => {
  // {nome:"Artur",rga:"1234",pontos:30}
  console.log(`Nome: ${nome}, rga:${rga}, pontos:${pontos}`)
}
const objpessoa:Pessoa = {nome:"Artur",rga:"1234",pontos:30}

imprimeUmObjetoPessoa(objpessoa.nome, objpessoa.rga, objpessoa.pontos)
interface Disciplina{
  nome:string;
}

const imprimeUmObjetoPessoaDois = (obj: Pessoa) => {
  // {nome:"Artur",rga:"1234",pontos:30}
  console.log(`Nome: ${obj.nome}, rga:${obj.rga}, pontos:${obj.pontos}`)
}

const imprimeUmObjetoPessoaTres = (obj: Partial<Pessoa>) => {
  // {nome:"Artur",rga:"1234",pontos:30}
  console.log(`Nome: ${obj.nome}, rga:${obj.rga}`)
}
imprimeUmObjetoPessoaDois(objpessoa)
imprimeUmObjetoPessoaTres(objpessoa)

const imprimedisc = (obj : Pessoa) => {
  if(obj.disciplinas){
    console.log(obj.disciplinas)
  }

}
const objpessoa2 = {...objpessoa, disciplinas:[{nome:"disc 1"}]}
imprimedisc(objpessoa2)