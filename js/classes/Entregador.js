class Entregador extends Pessoa {
  quatidadeEntregasRealizadas;
  static objetivo = 500;

  constructor(nome, idade) {
    super(nome, idade);

    this.nome = nome;
    this.idade = idade;
  }
}

const entregador1 = new Entregador('Amélia', 25);
const entregador2 = new Entregador('Amanda', 30);