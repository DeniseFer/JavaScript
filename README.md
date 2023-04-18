# OBJETOS

--------------------------------------------------------

- Em java temos classes e em JS temos objetos.

- A herança de um objeto é herdade de outro objeto
- __proto__ -> comum a todos os objetos
Ex.:
 x = {a: 250}
 y = { }
 //herda de x
 y.__proto__ = x
 console.log(y.a) // herdou a
 
 - encapsulamento(EM JAVA)
    --> não permite a modificação de dados
    --> Permite métodos para ler e escrever
 
- set escreve
- get lê

x = {-a: 123
setA: function(a) {_a = a}
getA: function() {return _a}}
