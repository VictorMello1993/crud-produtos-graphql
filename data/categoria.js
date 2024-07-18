let idCategoria = 100

export const proximoIdCategoria = () => idCategoria++

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
