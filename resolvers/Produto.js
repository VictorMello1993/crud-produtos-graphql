export default {
    Produto: {
        precoComDesconto(produto) {
            const {preco, desconto} = produto
            return preco * (1 - (desconto / 100))
        }
    }
}