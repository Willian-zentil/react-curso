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
lastP(lastP.length - 1)

//transversing
// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu")
const cloneMenu = menu.cloneNode(true)

document.querySelector(".copy").appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
document.querySelector(".faq").querySelector("DT").querySelector("dl") //ou

// Selecione o DD referente ao primeiro DT
const primeiroDt = faq.querySelector("DT")
const proximoDD = primeiroDt.nexrElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animaisTxt = document.querySelector(".animais").innerHTML
faq.innerHTML = animaisTxt
