class Pessoa {
  constructor(
    private _nome: string,
    private _sexo: string,
    private _idade: number
  ) {}

  public get nome () {
    return this._nome;
  }

  public set nome(nome: string) {
    if (nome.trim() === ''){
      throw new Error('Nome inválido')
    }

    this._nome = nome
  }

  public get sexo() {
    return this._sexo;
  }

  public set sexo(sexo: string) {
    if (sexo.toLowerCase() !== 'masculino' && sexo.toLowerCase() !== 'feminino') {
      throw new Error('Sexo inválido')
      return;
    }

    this._sexo = sexo;
  }

  public get idade() {
    return this._idade;
  }

  public set idade(idade: number) {
    if (idade === 0) {
      throw new Error('Idade inválida')
    }

    this._idade = idade;
  }

  public menorDeIdadeOuMaior(idade: number) {

    if (idade >= 18) {
      console.log('Pessoa maior de idade')
      return;
    }
    
    console.log('Pessoa menor de idade')
  }
}

try {
  const pessoa = new Pessoa('Joao', 'Masculino', 22)
  pessoa.menorDeIdadeOuMaior(pessoa.idade)
  pessoa.nome = ''
  pessoa.sexo = 'outro'
  pessoa.idade = 0
  console.log(pessoa)
} catch (error) {
  console.log('Mensagem do erro ' + error)
}