class ImpostoDeRenda {
  private _nome: string
  private _rendaAnual: number

  constructor(nome: string, rendaAnual: number) {
    this._nome = nome;
    this._rendaAnual = rendaAnual;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    if (nome.trim() === '') {
      throw new Error('Nome inválido')
    }

    this._nome = nome;
  }

  public get rendaAnual() {
    return this._rendaAnual;
  }

  public set rendaAnual(rendaAnual: number) {
    if (rendaAnual === 0) {
      throw new Error('Renda anual inválida')
    }
    this._rendaAnual = rendaAnual;
  }

}

class ImpostoDeRendaPessoaFisica extends ImpostoDeRenda {
  private _gastosComSaude: number;

  constructor (nome: string, rendaAnual: number, gastosComSaude: number) {
    // super e o construtor da classe pai (ImpostoDeRenda)
    super(nome, rendaAnual);
    this._gastosComSaude = gastosComSaude;
  }

  public get gastosComSaude() {
    return this._gastosComSaude
  }

  public set gastosComSaude(gastosComSaude: number) {
    if (gastosComSaude < 0) {
      throw new Error('Gastos com saúde inválido')
    }

    this._gastosComSaude = gastosComSaude;
  }

  public calcularImposto() {
    if (this.rendaAnual < 20000) {
      return this.rendaAnual * 0.15 - (this.gastosComSaude === 0 ? 0 : this.gastosComSaude / 2);
    }

    return this.rendaAnual * 0.25 - (this.gastosComSaude === 0 ? 0 : this.gastosComSaude / 2);
  }
}

class ImpostoDeRendaPessoaJuridica extends ImpostoDeRenda {
  private _numeroFuncionarios: number

  constructor (nome: string, rendaAnual: number, numeroFuncionarios: number) {
    super(nome, rendaAnual);
    this._numeroFuncionarios = numeroFuncionarios;
  }

  public get numeroFuncionarios() {
    return this._numeroFuncionarios;
  }

  public set numeroFuncionarios(numeroFuncionarios: number) {
    if (numeroFuncionarios === 0) {
      throw new Error('Número de funcionários inválidos')
    }

    this._numeroFuncionarios = numeroFuncionarios
  }

  public calcularImposto() {
    if (this._numeroFuncionarios > 10) {
      return this.rendaAnual * 0.14;
    }

    return this.rendaAnual * 0.16;
  }

}


try {
  const impostoDeRendaPessoaJuridica = new ImpostoDeRendaPessoaJuridica('Nome x', 400000, 30)
  const impostoPessoaJuridica = impostoDeRendaPessoaJuridica.calcularImposto()
  console.log(`O imposto da pessoa juridica ficou no valor de ${impostoPessoaJuridica}`)

  const impostoDeRendaPessoaFisica = new ImpostoDeRendaPessoaFisica('Nome y', 50000, 2000)
  const impostoPessoaFisica = impostoDeRendaPessoaFisica.calcularImposto()
  console.log(`O imposto da pessoa fisica ficou no valor de ${impostoPessoaFisica}`)
} catch (error) {
  console.log('Mensagem do erro ' + error)
}