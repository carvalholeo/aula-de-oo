// @ts-check

class Cliente extends Pessoa {
  constructor(nome, idade) {
    super(nome, idade);
  }

  exibirInformacoes() {
    console.log(this);
  }
}

const cliente1 = new Cliente("Lígia", 30);
const cliente2 = new Cliente("Léo", 28);

cliente1.fazerAniversario();
cliente2.fazerAniversario();
