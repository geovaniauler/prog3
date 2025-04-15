let pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Feliz",

    imprimir(){
        console.log(`${this.nome} tem ${this.idade} anos e mora na cidade ${this.cidade}`)
    },
    aniversario(){
        this.idade++;
        console.log(`Parabéns ${this.nome}, você agora tem ${this.idade} anos!`);
    }
};

console.log(pessoa.nome, pessoa.idade, pessoa.cidade);

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
console.log(pessoa["cidade"]);

console.log(`Interpolação: ${pessoa.nome} tem ${pessoa.idade} anos e mora na cidade ${pessoa.cidade}`);

pessoa.imprimir();

pessoa.aniversario();

pessoa.endereco = "Rua ABC, 123";
pessoa.cpf = "123.456.789-00";
console.log(pessoa);

delete pessoa.cidade;
console.log(pessoa.cidade); // undefined