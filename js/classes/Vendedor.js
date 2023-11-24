class Vendedor extends Pessoa {
  salario;
  static #objetivo = 1000;

  constructor(nome, idade) {
    super(nome, idade);

    this.nome = nome;
    this.idade = idade;
  }

  static alterarObjetivo(objetivo) {
    Vendedor.#objetivo = objetivo;
  }

  static exibirObjetivo() {
    return Vendedor.#objetivo;
  }
}

const vendedor1 = new Vendedor('Astrogildo', 30);
const vendedor2 = new Vendedor('Astolfo', 57);



console.log(vendedor1.nome, vendedor1.idade);
console.log(vendedor2.nome, vendedor2.idade);
