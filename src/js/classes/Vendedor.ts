class Vendedor extends Pessoa {
  salario;
  static #objetivo = 1000;

  constructor(nome, idade) {
    super(nome, idade);

    this.nome = nome;
  }

  /**
   * Este método altera o objetivo de vendas de todos os vendedores
   * @param {number} objetivo Novo objetivo aopara os vendedores atingirem
   * @returns {void}
   */
  static alterarObjetivo(objetivo) {
    Vendedor.#objetivo = objetivo;
  }

  static exibirObjetivo() {
    return Vendedor.#objetivo;
  }
}

const vendedor1 = new Vendedor("Astrogildo", 30);
const vendedor2 = new Vendedor("Astolfo", 57);
