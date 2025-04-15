function somar(a, b){
    let res = a + b;
    console.log("Soma", res);
    return res;
}

console.log(somar(2, 3));


function imprimir(nome,frase){
    console.log(nome, "falou", frase);;
    
}

let s1 = somar(2, 3);
console.log(s1);

let f1 = function(){
    console.log("Aninima");
    
}

let qualquer = function(a,b){
    console.log("Multiplicação", a*b);
    
}

let executora = function(f){
    f(2,3);  
}
executora(qualquer);

//arrow funcion
let a1 = (a,b) => {
    let soma = a + b;
    console.log("Arrow", soma);
    
}
a1(10,30);

let p1 = palavra => console.log("Palavra", palavra);
p1("Teste");

let ola = () => console.log("Olá Mundo!");
ola();