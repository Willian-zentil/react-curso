

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome, sobreNome, idade){
    this.idade = idade
    this.nome = nome
    this.sobreNome = sobreNome
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobreNome}`
}

const andre = new Pessoa('andre','Carlos', 20)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
    /*
    Object.getOwnPropertyNames(NodeList.prototype)
    Object.getOwnPropertyNames(HTMLCollection.prototype)
    Object.getOwnPropertyNames(Document.prototype)
    */
   
// Liste os construtores dos dados abaixo

/*let aux = document.getElementById('app');
aux.style.color = 'red';*/

/*
li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
*/

// Liste 5 objetos nativos
String
Object
Array
Function
Number
// Liste 5 objetos do browser
console
Window
history
NodeList
HTMLCollection
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

/**/

// Retorne um número aleatório
// entre 1050 e 2000
Math.floor(Math.random() * ( 2000 - 1050 +1 ) + 1050)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arraynum = numeros.split(', ')
const numeroMax = Math.max(...arraynum)

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];
