import { produtos } from "../data/produto.js"
import { categorias } from "../data/categoria.js"
import { filtrarProdutoPorValorExato, filtrarProdutoPorValorMaiorQue, filtrarProdutoPorValorMenorQue } from "../utils/utils.js"

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
        },
        obterProdutos(_, {filtros}) {
            const {nomeCategoria, precoMenorQue,precoMaiorQue,desconto, descontoMaiorQue, disponivel} = filtros
            let produtosSelecionados = [...produtos]            

            if(nomeCategoria !== undefined) {               
                produtosSelecionados = filtrarProdutoPorValorExato('categoria', nomeCategoria)
            }

            if(precoMenorQue !== undefined) {
                produtosSelecionados = filtrarProdutoPorValorMenorQue('preco', precoMenorQue)
            }

            if(precoMaiorQue !== undefined) {
                produtosSelecionados = filtrarProdutoPorValorMaiorQue('preco', precoMaiorQue)
            }

            if(desconto !== undefined) {
                produtosSelecionados = filtrarProdutoPorValorExato('desconto', desconto)
            }

            if(descontoMaiorQue !== undefined) {
                produtosSelecionados = filtrarProdutoPorValorExato('desconto', descontoMaiorQue)
            }

            if(disponivel !== undefined) {
                produtosSelecionados = filtrarProdutoPorValorExato('disponivel', disponivel)
            }

            return produtosSelecionados
        },        
        todasCategorias() {
            return categorias
        }     
    }
}