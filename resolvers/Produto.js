export default {
    Produto: {
        precoComDesconto(produto) {
            const {preco, desconto} = produto
            
            if(desconto) {
                return preco * (1 - (desconto / 100))
            }

            return null
        }
    }
}