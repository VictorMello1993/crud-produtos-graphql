import { categorias } from "../data/data.js"

export default {
    Produto: {
        precoComDesconto(produto) {
            const {preco, desconto} = produto
            
            if(desconto) {
                return preco * (1 - (desconto / 100))
            }

            return null
        },
        categoria(produto) {
            return categorias.find(c => c.id === produto.categoria_id)
        }
    }
}