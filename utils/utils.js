import { categorias } from "../data/categoria.js"
import { produtos } from "../data/produto.js"

const UNICODE_PROPERTY_ESCAPES_REGEX = /\p{Mn}/gu

export const removerAcentos = (texto) => texto.normalize("NFD").replace(UNICODE_PROPERTY_ESCAPES_REGEX, "")
export const letrasMinusculas = (texto) => texto.toLowerCase()

export const contemPalavras = (texto1, texto2) => {
  if(texto1 && texto2){
      return letrasMinusculas(removerAcentos(texto2)).includes(letrasMinusculas(removerAcentos(String(texto1))))
  }
  return false
}

export const filtrarProdutoPorValorExato = (campo, valor) => {
  if(typeof valor === 'string'){

    const categoria = categorias.find(c => contemPalavras(valor, c.nome))

    if(categoria){
        return produtos.filter(p => p.categoria_id === categoria.id)                        
      }
      
      return produtos.filter(p => contemPalavras(valor, p[campo]))
  }

  return produtos.filter(p => p[campo] === valor)
}

export const filtrarProdutoPorValorMaiorQue = (campo, valor) => {
  return produtos.filter(p => p[campo] > valor)
}

export const filtrarProdutoPorValorMenorQue = (campo, valor) => {
  return produtos.filter(p => p[campo] < valor)
}