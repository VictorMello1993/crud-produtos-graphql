let id = 1
let idCategoria = 100

const UNICODE_PROPERTY_ESCAPES_REGEX = /\p{Mn}/gu

export const proximoIdProduto = () => id++
export const proximoIdCategoria = () => idCategoria++
export const removerAcentos = (texto) => texto.normalize("NFD").replace(UNICODE_PROPERTY_ESCAPES_REGEX, "")
export const letrasMinusculas = (texto) => texto.toLowerCase()
export const contemPalavras = (texto1, texto2) => letrasMinusculas(removerAcentos(texto1))
                                                  .includes(letrasMinusculas(removerAcentos(String(texto2))))

export const produtos = [
    {
        id: proximoIdProduto(),        
        nome: 'Monitor 27 polegadas',
        preco: 1200.00,
        desconto: 30,        
        categoria_id: 100,
        disponivel: true
    },
    {
        id: proximoIdProduto(),        
        nome: 'Forno Airfryer Mondial',
        preco: 650.00,
        desconto: 10,        
        categoria_id: 101,
        disponivel: true
    },
    {
        id: proximoIdProduto(),        
        nome: 'Fichário',
        preco: 25.00,
        desconto: 15,
        categoria_id: 102,
        disponivel: true
    },
]

export const categorias = [
    {
        id: proximoIdCategoria(),
        nome: 'Informática',
        localizacao: 'Corredor 1'
    },
    {
        id: proximoIdCategoria(),
        nome: 'Eletrodomésticos',
        localizacao: 'Corredor 2'
    },
    {
        id: proximoIdCategoria(),
        nome: 'Papelaria',
        localizacao: 'Corredor 3'
    },
]