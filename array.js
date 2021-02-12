const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma variável
const firstElement = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const lastElement = comidas.pop();

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();

// Inverta a ordem dos estudantes
estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
if(estudantes.includes('Joana')){
  //console.log("faz parte")
}

// Verifique se Juliana faz parte dos estudantes
if(estudantes.includes('Juliana')){
  //console.log("faz parte")
}else{
  //console.log('não faz parte')
}


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrocopy = carros.copyWithin();
carros.pop();


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText

  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

//console.log(objCursos)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorCem = numeros.filter(n => n > 100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

//console.log(instrumentos.includes('Baixo'))
//console.log(instrumentos.includes('Baixo'))

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const somaTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
    
   return acumulador + precoLimpo
}, 0)

//console.log(somaTotal)



// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const arrayPs = document.querySelectorAll('p')

const totChar = Array.prototype.reduce.call(arrayPs, (ac, item) => {
  return ac + item.innerText.length 
}, 0)

//console.log(totChar)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novoElemento(tag, classe, conteudo){
  const novoElem = document.createElement(tag)
  classe ? novoElem.classList.add('ativo') : null
  conteudo ? novoElem.innerText = conteudo : null 

  return novoElem
}

//console.log(novoElemento('div', 'ativo', 'novo conteudo aaaaaaaaaa'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const h1titulo = novoElemento.bind(null, 'h1', 'titulo')



// Crie uma função que verifique
// corretamente o tipo de dado

function verificaDados(dado){
  return Object.prototype.toString.call(dado)
}

console.log(verificaDados(""))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = []

Object.defineProperties(quadrado, {
  lado: {
    configurable: false
  }
})

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))