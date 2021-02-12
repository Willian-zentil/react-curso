//função
function istrue(valor){
    
    return !!valor
}

function peri(lado){
    return lado * 4
}

function nomeC(nome, sobre){
    return '${nome} ${sobre}'
}

function ispar(valor){
    var modulo = valor % 2
    
    if(modulo === 0){
        return true
    }else{
        return false
    }
}

function tipo(dado){
    var aux = typeof(dado)
    return aux
}

addEventListener('scroll',function(){
    console.log('willian')
})

//objetos 
var pessoa = {
    nome: 'willian',
    sobreNome: 'gomes',
    idade: 19,
    prin: function() {
        console.log(this.sobreNome)
    }
}

pessoa.idade = 20

//seleção
const imagens = document.querySelectorAll('img[src^="img/imagem"]')

const links = document.querySelectorAll('[href^="#"]')

const hh2 = document.querySelector('.animais h2')

const lastP = document.querySelectorAll('p')


//transversing
// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu")
const cloneMenu = menu.cloneNode(true)

/*document.querySelector(".copy").appendChild(cloneMenu)*/

// Selecione o primeiro DT da dl de Faq
/*document.querySelector(".faq").querySelector("DT").querySelector("dl") //ou*/

// Selecione o DD referente ao primeiro DT
const primeiroDt = faq.querySelector("DT")
const proximoDD = primeiroDt.nexrElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animaisTxt = document.querySelector(".animais").innerHTML
faq.innerHTML = animaisTxt


//objetos 
// Transforme o objeto abaixo em uma Constructor Function
const humano = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }

  function Humano(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
      console.log(nome + ' andou');
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
 
  const maria = new Humano('maria', 25);
  const joao = new Humano('João', 20);
  const Bruno = new Humano('Bruno', 15);
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  function Dom(seletor){
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList

    this.addClass = function(classe){
        elementList.forEach(element => {
            element.classList.add(classe)
        });
    }
    this.remove = function(classe){
        elementList.forEach(element => {
            element.classList.remove(classe)
        });
    }
  }

  const listaItens = new Dom('li')
  const ul = new Dom('ul')

  ul.addClass('ativar')