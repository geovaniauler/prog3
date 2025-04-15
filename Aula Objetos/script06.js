class pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};

class aluno extends pessoa {
    constructor(nome, sobrenome, matricula) {
        super(nome, sobrenome);
        this.matricula = matricula;
    }

    imprimir() {
        super.imprimir();
        console.log(this.matricula);
    }

};

let p1 = new pessoa("Maria", "Silva");
console.log(p1);