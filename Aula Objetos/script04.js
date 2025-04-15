let carro = new Object();
carro.marca = "Fusca";
carro.modelo = "Fusca 1300";
carro.ano = 1970;
carro.ligado = false;

for (const prop in carro) {
    console.log(prop, carro[prop]);
}

Object.keys(carro).forEach( item => {
    console.log(item, carro[item]);
});

let prop1 = 'nome-completo';
let prop2 = 'data-de-nascimento';

let pessoa = {
    [prop1]: "Maria",
    [prop2]: "01/01/1990",
}

console.log(pessoa['nome-completo']);
console.log(pessoa['data-de-nascimento']);

console.log(pessoa[prop1]);
console.log(pessoa[prop2]);

let rua = 'Rua Volunarios 123';
let cidade = 'Feliz';
let cep = '95770-000';
let estado = 'RS';

let endereco = {
    rua,
    cep,
    cidade,
    estado,
}

let cliente = {
    nome: 'Maria',
    endereco,
};


let e1 = cliente.endereco.estado;
let r1 = cliente.endereco.rua;

console.log(e1, r1);

