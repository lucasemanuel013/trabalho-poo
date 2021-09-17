class Fatura {
  private numero: number
  private descricao: string
  private quantidadeComprada: number
  private preco: number

  constructor(
    numero: number,
    descricao: string,
    quantidadeComprada: number,
    preco: number
  ) {
    this.numero = numero;
    this.descricao = descricao;
    this.quantidadeComprada = quantidadeComprada;
    this.preco = preco
  }

  public valorFatura() {
    return this.quantidadeComprada * this.preco;
  }
}

const fatura = new Fatura(123215, 'Descricao da fatura', 10, 49.99)
const valorDaFatura = fatura.valorFatura()
console.log(valorDaFatura)
console.log(fatura)