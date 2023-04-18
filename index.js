function alunos (nome, matricula, idade, saudeMental){ // FUNÇÃO CONSTRUTORA
    this.name = nome
    this.mat = matricula
    this.age = idade
    this.issues = saudeMental
    this.saudação = function(){
        alert("Olá aluno "+ this.mat+". Você tem "+this.name+" anos de idade. 👌🤣😈😈😈")
    }
}

let aluno1 = new alunos("Marla", 506, 78,"nao")
aluno1.saudação()


function alunos (nome, matricula, idade, saudeMental){ // FUNÇÃO FÁBRICA
    const obj={};
    obj.name = nome
    obj.mat = matricula
    obj.age = idade
    obj.issues = saudeMental
    obj.saudação = function(){
        alert("Olá aluno "+ obj.mat+". Você tem "+obj.name+" anos de idade. 👌🤣😈😈😈")
    }
    return obj
}

let nome1 = prompt("Digite seu nome:\n")
let matricula1 = prompt("Digite sua matricula:\n")
let idade1 = prompt("Digite sua idade:\n")
let saudeMental1 = prompt("Digite sua saúde mental:\n")
alunos(nome1, matricula1, idade1, saudeMental1).saudação()

// GETTERS AND SETTERS

 x = {a: 250} //HERANÇA
 y = { }
 //herda de x
 y.__proto__ = x
 
console.log(y.a);

x.a =300 // novo valor para a

console.log(y.a)


x = {_a: 123,
setA: function(valor){this.a = valor},// set escreve
getA: function(){return this.a}} //get lê

x = {_a: 123,
     set a(valor){this._a =valor}, //funções em get e set na maneira atual
     get a(){return this._a}}

x.a =10

