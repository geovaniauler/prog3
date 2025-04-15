/*let pessoa = {
    nome: "Maria",
    idade: 25,
    endereco: {
        rua: "Rua ABC, 123",
        cidade: "Feliz",
        numero: 123,
    },
};

//let nome = pessoa.nome;
let {nome} = pessoa;
let {nome: nome2, idade} = pessoa;
let {rua, numero, cidade} = pessoa.endereco;

console.log(nome, idade, rua, numero, cidade);*/

let carro = {
    marca: {
        nome: "Ford",
        pais: "EUA",
    },
    modelo: {
        nome: "Ranger",
        serie: "XLT",
    },
    ano: 2020
};

//let nome = carro.marca.nome;
//let pais = carro.marca.pais;
//let nomeModelo = carro.modelo.nome;
//let serie = carro.modelo.serie;
//let ano = carro.ano;

let { nome: nomeMarca, pais } = carro.marca;
let { modelo: nomeModelo, serie } = carro.modelo;
let { ano } = carro;
console.log(nomeMarca, pais, nomeModelo, serie, ano);

let numeros = {
    0: 'Feliz',
    1.5: 'Porto Alegre',
    2: 'São Paulo',
};

console.log(numeros[0]);
console.log(numeros[1.5]);
console.log(numeros[2]);
