class Pessoa {
    constructor(nome, cpf, endereço, email, telefone = null) {
      this.nome = nome;
      this.cpf = cpf;
      this.endereço = endereço;
      this.email = email;
      this.telefone = telefone;
    }
  }
  class Estudante extends Pessoa {
    imprimirInfo() {
      if (this.telefone == null) {
        console.log(
          "nome: " +
            this.nome +
            "cpf: " +
            this.cpf +
            " endereço: " +
            this.endereço +
            " email: " +
            this.email +
            " sem telefone: "
        );
      } else {
        console.log(
          "nome" +
            this.nome +
            "cpf" +
            this.cpf +
            "endereço" +
            this.endereço +
            "email" +
            this.email +
            "telefone" +
            this.telefone
        );
      }
    }
  }
  var Aderbal = new Pessoa(
    "Aderbal",
    "01234567891",
    "Rua dos bobos nº 0",
    "aderbal@ifms.edu.br",
    "67999996666"
  );
  var Adrasteia = new Estudante(
    "Adrasteia ",
    "2132132100",
    "Rua sem nome nº 200",
    "adrasteia@ifms.edu.br"
  );
  Adrasteia.imprimirInfo();
  