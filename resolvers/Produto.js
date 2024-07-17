import { categorias } from "../data/data.js"

export default {
    Produto: {
        precoComDesconto(produto) {
            const {preco, desconto} = produto

            let descontoTotal = desconto || 0

            const categoria = categorias.find(c => c.id === produto.categoria_id)
            
            if(categoria && categoria.desconto){
                descontoTotal += categoria.desconto
            }

            if(descontoTotal > 0) {
                return preco * (1 - (descontoTotal / 100))
            }

            return preco
        },
        categoria(produto) {
            return categorias.find(c => c.id === produto.categoria_id)
        }
    }
}