function alunos (nome, matricula, idade, saudeMental){
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