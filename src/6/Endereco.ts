interface IEndereco {
  rua: string
  numero: number
  bairro: string
  cidade: string
}

const endereco: IEndereco = {
  rua: 'Rua x',
  numero: 1000,
  bairro: 'Centro',
  cidade: 'Volta redonda'
}

console.log(endereco)