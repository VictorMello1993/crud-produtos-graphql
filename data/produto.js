let id = 1

export const proximoIdProduto = () => id++

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