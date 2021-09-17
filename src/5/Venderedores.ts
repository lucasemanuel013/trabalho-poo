class Vendedores {
  private _nome: string
  private _salario: number
  private _valorDaVenda: number

  constructor(nome: string, salario: number, valorDaVenda: number) {
    this._nome = nome;
    this._salario = salario;
    this._valorDaVenda = valorDaVenda;
  }

  public get nome() {
    return this._nome;
  }

  public set nome(nome: string) {
    if (nome.trim() === '') {
      throw new Error('Nome inválido')
    }

    this._nome = nome
  }

  public get salario() {
    return this._salario
  }

  public set salario(salario: number) {
    if (salario <= 0) {
      throw new Error('Salário inválido')
    }
    this._salario = salario;
  }

  public get valorDaVenda() {
    return this._valorDaVenda;
  }

  public set valorDaVenda(valorDaVenda: number) {
    if (valorDaVenda <= 0) {
      throw new Error('Valor da venda inválido')
    }
    this._valorDaVenda = valorDaVenda;
  }

  public desconto(): number {
    return this._salario * 0.08;
  }
}

class VendedorPessoaFisica extends Vendedores {
  private _regiao: string = ''

  constructor(nome: string, salario: number, valorDaVenda: number) {
    super(nome, salario, valorDaVenda)
  }


  public get regiao() {
    return this._regiao;
  }

  public set regiao(regiao: string) {
    const regiaoLowerCase = regiao.toLowerCase();
    if (
      regiaoLowerCase !== 'sul' && 
      regiaoLowerCase !== 'sudeste' &&
      regiaoLowerCase !== 'centro-oeste' &&
      regiaoLowerCase !== 'norte' && 
      regiaoLowerCase !== 'nordeste') {
        throw new Error('Região inválida')
      }

    this._regiao = regiaoLowerCase
  }

  public calcularComissao() {
    if (this._regiao === 'sul') {
      return this.valorDaVenda * 0.10;
    } else if (this._regiao === 'sudeste') {
      return this.valorDaVenda * 0.12;
    } else if (this._regiao === 'centro-oeste') {
      return this.valorDaVenda * 0.14;
    } else if (this._regiao === 'norte') {
      return this.valorDaVenda * 0.15;
    } 
    return this.valorDaVenda * 0.17;
  }

  public calcularSalarioTotal() {
    return this.salario + this.calcularComissao()
  }
}

class VendedorPessoaJuridica extends Vendedores {
  private _nomeEmpresa: string
  private _totalFuncionarios: number

  constructor(nomeEmpresa: string, salario: number, valorDaVenda: number, totalFuncionarios: number) {
    super(nomeEmpresa, salario, valorDaVenda)
    this._nomeEmpresa = nomeEmpresa
    this._totalFuncionarios = totalFuncionarios
  }

  public get nomeEmpresa() {
    return this._nomeEmpresa
  }

  public set nomeEmpresa(nomeEmpresa: string) {
    if (nomeEmpresa.trim() === '') {
      throw new Error('Nome da empresa inválido')
    }

    this._nomeEmpresa = nomeEmpresa
  }

  public get totalFuncionarios() {
    return this._totalFuncionarios
  }

  public set totalFuncionarios(totalFuncionarios: number) {
    if (totalFuncionarios === 0) {
      throw new Error('Total de funcionarios inválido')
    }

    this._totalFuncionarios = totalFuncionarios
  }

  public calcularComissao() {
    if (this.valorDaVenda < 5000) {
      return this.valorDaVenda * 0.02
    } else if (this.valorDaVenda >= 5000 && this.valorDaVenda < 10000) {
      return this.valorDaVenda * 0.04;
    }
    
    return this.valorDaVenda * 0.06;
  }

  public salarioTotal() {
    if (this.totalFuncionarios < 100) {
      return this.salario + this.calcularComissao() + 200
    }

    return this.salario + this.calcularComissao() + 300
  }
}

try {
  const vendedorPessoaFisica = new VendedorPessoaFisica('Nome x', 1000, 1000)
  vendedorPessoaFisica.regiao = 'sudeste'
  const salarioTotal = vendedorPessoaFisica.calcularSalarioTotal()
  const comissao = vendedorPessoaFisica.calcularComissao()

  console.log(`Salario total pessoa fisica: ${salarioTotal} || Comissao: ${comissao}`)

  const vendedorPessoaJuridica = new VendedorPessoaJuridica('Nome y', 3000, 7000, 120)
  const salarioTotalJuridica = vendedorPessoaJuridica.salarioTotal()
  const comissaoJuridica = vendedorPessoaJuridica.calcularComissao()

  console.log(`Salario total pessoa juridica: ${salarioTotalJuridica} || Comissao: ${comissaoJuridica}`)
} catch (error) {
  console.log('Mensagem do erro ' + error)
}