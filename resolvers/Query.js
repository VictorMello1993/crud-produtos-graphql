import { categorias, contemPalavras, letrasMinusculas, produtos, removerAcentos } from "../data/data.js"

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

            const filtrarPorValorExato = (campo, valor) => {
                if(campo.includes('categoria')){
                    const categoria = categorias.find(c => contemPalavras(c.nome, valor))
                    
                    if(categoria){
                        return produtosSelecionados.filter(p => p.categoria_id === categoria.id)                        
                    }
                }

                return produtosSelecionados.filter(p => p[campo] === valor)
            }

            const filtrarPorValorMaiorQue = (campo, valor) => {
                return produtosSelecionados.filter(p => p[campo] > valor)
            }

            const filtrarPorValorMenorQue = (campo, valor) => {
                return produtosSelecionados.filter(p => p[campo] < valor)
            }

            if(nomeCategoria !== undefined) {               
                produtosSelecionados = filtrarPorValorExato('categoria', letrasMinusculas(removerAcentos(nomeCategoria)))
            }

            if(precoMenorQue !== undefined) {
                produtosSelecionados = filtrarPorValorMenorQue('preco', precoMenorQue)
            }

            if(precoMaiorQue !== undefined) {
                produtosSelecionados = filtrarPorValorMaiorQue('preco', precoMaiorQue)
            }

            if(desconto !== undefined) {
                produtosSelecionados = filtrarPorValorExato('desconto', desconto)
            }

            if(descontoMaiorQue !== undefined) {
                produtosSelecionados = filtrarPorValorExato('desconto', descontoMaiorQue)
            }

            if(disponivel !== undefined) {
                produtosSelecionados = filtrarPorValorExato('disponivel', disponivel)
            }

            return produtosSelecionados
        }     
    }
}