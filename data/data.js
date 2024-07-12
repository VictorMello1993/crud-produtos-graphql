let id = 1

export const proximoId = () => id++

export const produtos = [
    {
        id: proximoId(),        
        nome: 'Monitor 27 polegadas',
        preco: 1200.00,
        desconto: 30,        
        categoria: "Eletrônicos",
        disponivel: true
    },
    {
        id: proximoId(),        
        nome: 'Chuteira Nike Total 90',
        preco: 980.00,
        desconto: 10,        
        categoria: "Esportes",
        disponivel: true
    },
    {
        id: proximoId(),        
        nome: 'Camisa polo',
        preco: 120.00,
        desconto: 15,
        categoria: "Roupas",
        disponivel: true
    },
]
