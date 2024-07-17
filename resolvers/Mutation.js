import { categorias, contemPalavras, letrasMinusculas, produtos, proximoIdCategoria, proximoIdProduto, removerAcentos } from "../data/data.js"

export default {
  Mutation: {
    novoProduto(_, {dados}) {
      
      const {nomeCategoria} = dados
      
      const categoria = categorias.find(c => contemPalavras(nomeCategoria, c.nome))      
      
      if(!categoria) {
        throw new Error('Categoria não encontrado')
      }

      const novoProduto = {
        id: proximoIdProduto(),        
        disponivel: true,
        categoria_id: categoria.id,
        ...dados
      }      

      produtos.push(novoProduto)      

      return novoProduto
    },

    excluirProduto(_, {filtros}) {
      const {id, nome} = filtros

      const index = produtos.findIndex(p => p.id === id || contemPalavras(nome, p.nome))

      if(index === -1) {
        throw new Error('Produto não encontrado')
      }

      const produtoASerRemovido = produtos[index]

      produtos.splice(index, 1)

      return produtoASerRemovido

    },

    alterarProduto(_, {filtros, dados}){
      const index = produtos.findIndex(p => p.id === filtros.id || contemPalavras(filtros.nome, p.nome))

      if(index === -1) {
        throw new Error('Produto não encontrado')
      }

      const {nomeCategoria} = dados

      const categoria = categorias.find(c => contemPalavras(nomeCategoria, c.nome))

      if(!categoria){
        throw new Error('Categoria não encontrado')
      }      

      const produtoAtualizado = {
        categoria_id: categoria.id,
        ...dados
      }

      produtos[index] = {...produtos[index], ...produtoAtualizado}

      return produtos[index]

    },

    setCategoria(_, {filtros, dados}){
      let categoriasSelecionadas = [...categorias]
      const index = categoriasSelecionadas.findIndex(c => filtros.id === c.id || contemPalavras(filtros.nome, c.nome))

      if(index === -1){
        const novaCategoria = {
          id: proximoIdCategoria(),
          ...dados          
        }

        categorias.push(novaCategoria)

        return novaCategoria
      }

      const {id, nome} = filtros

      const filtrarPorValorExato = (campo, valor) => {
        if(typeof valor === 'string'){
            return categoriasSelecionadas.filter(c => contemPalavras(valor, c.nome))
        }

        return categoriasSelecionadas.filter(p => p[campo] === valor)
    }

    if(id !== undefined){
      categoriasSelecionadas = filtrarPorValorExato('id', id)
    }

    if(nome  !== undefined) {               
        categoriasSelecionadas = filtrarPorValorExato('nome', nome)
    }

      categoriasSelecionadas[index] = {...categoriasSelecionadas[index], ...dados }

      categorias = [...categoriasSelecionadas]

      return categoriasSelecionadas[index]

    },

    excluirCategoria(_, {filtros}){
      const {id, nome} = filtros
      const index = categorias.findIndex(c => c.id === id || contemPalavras(nome, c.nome))

      if(index === -1) {
        throw new Error ('Categoria não encontrada')
      }

      const categoriaASerExcluida = categorias[index]

      categorias.splice(index, 1)

      return categoriaASerExcluida
    }
  }
}