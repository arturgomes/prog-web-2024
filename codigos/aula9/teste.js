var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var variavelQualquer;
variavelQualquer = 10;
console.log("🚀 ~ variavelQualquer:", variavelQualquer);
variavelQualquer = "Ola";
console.log("🚀 ~ variavelQualquer:", variavelQualquer);
variavelQualquer = true;
console.log("🚀 ~ variavelQualquer:", variavelQualquer);
var novoNoh = {
    valor: 30,
    prox: null
};
var novoNoh2 = {
    valor: "trinta",
    prox: novoNoh
};
console.log("🚀 ~ novoNoh2:", novoNoh2);
var imprimeUmObjetoPessoa = function (nome, rga, pontos) {
    // {nome:"Artur",rga:"1234",pontos:30}
    console.log("Nome: ".concat(nome, ", rga:").concat(rga, ", pontos:").concat(pontos));
};
var objpessoa = { nome: "Artur", rga: "1234", pontos: 30 };
imprimeUmObjetoPessoa(objpessoa.nome, objpessoa.rga, objpessoa.pontos);
var imprimeUmObjetoPessoaDois = function (obj) {
    // {nome:"Artur",rga:"1234",pontos:30}
    console.log("Nome: ".concat(obj.nome, ", rga:").concat(obj.rga, ", pontos:").concat(obj.pontos));
};
var imprimeUmObjetoPessoaTres = function (obj) {
    // {nome:"Artur",rga:"1234",pontos:30}
    console.log("Nome: ".concat(obj.nome, ", rga:").concat(obj.rga));
};
imprimeUmObjetoPessoaDois(objpessoa);
imprimeUmObjetoPessoaTres(objpessoa);
var imprimedisc = function (obj) {
    if (obj.disciplinas) {
        console.log(obj.disciplinas);
    }
};
var objpessoa2 = __assign(__assign({}, objpessoa), { disciplinas: [{ nome: "disc 1" }] });
imprimedisc(objpessoa2);
