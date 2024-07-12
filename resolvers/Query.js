import { produtos } from "../data/data.js"

export default {
    Query: {
        umProduto(){
            return {
                id: 1,
                nome: 'Monitor 27 polegadas',
                preco: 1200.00,
                desconto: 30,
                precoComDesconto: 800.00,
                categoria: "Eletrônicos",
                disponivel: true
            }
        },
        todosProdutos(){
            return produtos
        },
        obterProduto(_, {filtros}){
            const {id, nome} = filtros                    

            const produto = produtos.find(p => p.id === id || p.nome.toLocaleLowerCase().includes(String(nome).toLocaleLowerCase()));

            return produto
        }        
    }
}