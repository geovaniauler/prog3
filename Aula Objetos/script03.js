
let carro = new Object();
carro.marca = "Fusca";
carro.modelo = "Fusca 1300";
carro.ano = 1970;
carro.ligado = false;

carro.ligar = function(){
    console.log(`Ligando o carro ${this.modelo}`);
}
console.log(carro);
carro.ligar();

function veiculo(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
}
let v1 = new veiculo("Toyota", "Corolla", 2020);
console.log(v1);

