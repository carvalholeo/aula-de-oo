/**
 * Representa uma pessoa
 * @constructor
 * @param {string} nome Nome da pessoa
 * @param {number} idade Idade da pessoa
 * @abstract
 */
class Pessoa {
  nome: string;
  #idade: number;
  // endereco: string;
  cpf;
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

  setEmail(email: string) {
    if (this instanceof Cliente) {
      this.#email = email;
    }
  }

  /**
   * Retorna a idade da pessoa
   * @returns {number} Idade da pessoa
   */
  getIdade(): number {
    return this.#idade;
  }

  /**
   * Configura a idade do objeto pessoa.
   * @param {number} idade Idade da pessoa
   */
  setIdade(idade: number) {
    this.#idade = idade;
  }

  /**
   * Incrementa a idade do objeto pessoa em 1
   */
  fazerAniversario(): number {
    this.#idade = this.#idade + 1;
    return this.#idade;
  }

  #alterarCpf(cpf: string) {
    this.cpf = cpf;
  }
}
