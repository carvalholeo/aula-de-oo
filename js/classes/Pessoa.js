/**
 * Representa uma pessoa
 * @constructor
 * @param {string} nome Nome da pessoa
 * @param {number} idade Idade da pessoa
 * @abstract
 */
class Pessoa {
  nome;
  #idade;
  endereco;
  cpf;
  #rg;
  #email = "teste@teste.com";
  telefone;

  constructor(nome, idade) {
    this.nome = nome;
    this.#idade = idade;

    this.#alterarCpf("12345678900");
  }

  //getters e setters
  getEmail() {
    return this.#email;
  }

  setEmail(email) {
    if (this instanceof Cliente) {
      this.#email = email;
    }
  }

  /**
   * Retorna a idade da pessoa
   * @returns {number} Idade da pessoa
   */
  getIdade() {
    return this.#idade;
  }

  /**
   * Configura a idade do objeto pessoa.
   * @param {number} idade Idade da pessoa
   */
  setIdade(idade) {
    this.#idade = idade;
  }

  /**
   * Incrementa a idade do objeto pessoa em 1
   */
  fazerAniversario() {
    this.#idade = this.#idade + 1;
    return this.#idade;
  }

  #alterarCpf(cpf) {
    this.cpf = cpf;
  }
}
