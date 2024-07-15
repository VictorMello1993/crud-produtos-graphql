import { contemPalavras, produtos, proximoId } from "../data/data.js"

export default {
  Mutation: {
    novoProduto(_, {dados}) {
      const {nome, preco, desconto, categoria, disponivel} = dados
      
      const novoProduto = {
        id: proximoId(),
        nome,
        preco,
        desconto,
        categoria,
        disponivel,
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

    }
  }
}