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

    this.#alterarCpf('12345678900');
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

  getIdade() {
    return this.#idade;
  }

  setIdade(idade) {
    this.#idade = idade;
  }

  fazerAniversario() {
    this.#idade = this.#idade + 1;
  }

  #alterarCpf(cpf) {
    this.cpf = cpf;
  }
}
