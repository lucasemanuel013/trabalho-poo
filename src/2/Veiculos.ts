class Veiculos {
  private _modelo: string;
  private _marca: string;
  private _ano: number;
  private _valorLocacao: number;
  private _quantidadeDias: number;

  constructor (
    modelo: string,
    marca: string,
    ano: number,
    valorLocacao: number,
    quantidadeDias: number
  ) {
    this._modelo = modelo;
    this._marca = marca;
    this._ano = ano;
    this._valorLocacao = valorLocacao;
    this._quantidadeDias = quantidadeDias;
  }

  public get modelo() {
    return this._modelo;
  }

  public set modelo(modelo: string) {
    if (modelo.trim() === '') {
      throw new Error('Modelo inválido')
    }

    this._modelo = modelo;
  }

  public get marca() {
    return this._marca;
  }

  public set marca(marca: string) {
    if (marca.trim() === '') {
      throw new Error('Marca inválido')
    }

    this._marca = marca;
  }

  public get ano() {
    return this._ano;
  }

  public set ano(ano: number) {
    if (ano === 0) {
      throw new Error('Ano inválido')
    }

    this._ano = ano;
  }

  public get valorLocacao() {
    return this._valorLocacao;
  }

  public set valorLocacao(valorLocacao: number) {
    if (valorLocacao === 0) {
      throw new Error('Valor locaçao inválido')
    }

    this._valorLocacao = valorLocacao;
  }

  public get quantidadeDias() {
    return this._quantidadeDias;
  }

  public set quantidadeDias(quantidadeDias: number) {
    if (quantidadeDias === 0) {
      throw new Error('Quantidade de dias inválido')
    }

    this._quantidadeDias = quantidadeDias;
  }

  public passeio(quantidadeDias: number, valorLocacao: number) {
    return quantidadeDias * valorLocacao
  }

}

try {
  const veiculos = new Veiculos('Modelo x', 'Marca x', 2021, 1000, 7)
  const total = veiculos.passeio(4, 1000)
  console.log(`O total é R$${total}`)
  veiculos.ano = 0
  veiculos.marca = ''
  veiculos.modelo = ''
  veiculos.quantidadeDias = 0
  veiculos.valorLocacao = 0
} catch (error) {
  console.log('Mensagem do erro ' + error)
}