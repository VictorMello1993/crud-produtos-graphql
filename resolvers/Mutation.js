import { categorias, contemPalavras, letrasMinusculas, produtos, proximoIdProduto, removerAcentos } from "../data/data.js"

export default {
  Mutation: {
    novoProduto(_, {dados}) {
      
      const {nomeCategoria} = dados
      
      const categoria = categorias.find(c => letrasMinusculas(removerAcentos(c.nome)).includes(nomeCategoria))      
                
      const novoProduto = {
        id: proximoIdProduto(),        
        disponivel: true,
        categoria_id: categoria.id,
        ...dados
      }      

      if(!categoria) {
        throw new Error('Categoria não encontrado')
      }

      produtos.push(novoProduto)      

      return novoProduto
    },

    excluirProduto(_, {filtros}) {
      const {id, nome} = filtros

      const index = produtos.findIndex(p => p.id === id || contemPalavras(p.nome, nome))

      if(index === -1) {
        throw new Error('Produto não encontrado')
      }

      const produtoASerRemovido = produtos[index]

      produtos.splice(index, 1)

      return produtoASerRemovido

    },

    alterarProduto(_, {filtros, dados}){
      const index = produtos.findIndex(p => p.id === filtros.id || contemPalavras(p.nome, filtros.nome))

      if(index === -1) {
        throw new Error('Produto não encontrado')
      }

      const {nomeCategoria} = dados

      const categoria = categorias.find(c => letrasMinusculas(removerAcentos(c.nome)).includes(nomeCategoria))

      if(!categoria){
        throw new Error('Categoria não encontrado')
      }      

      const produtoAtualizado = {
        categoria_id: categoria.id,
        ...dados
      }

      produtos[index] = {...produtos[index], ...produtoAtualizado}

      return produtos[index]

    }
  }
}