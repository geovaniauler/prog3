const cidades = [
    "Feliz", "Bom Principio", "Alto Feliz", "Vale Real", "Harmonia", "Tupandi"
];


function msg(){
    const palavra = document.getElementsByName('city')[0].value;
    cidades.push(palavra);
    const lista = document.createElement('ol');


    cidades.forEach(cidade => {
        const novoelemento = document.createElement('li');
        const novotexto = document.createTextNode(cidade);
        console.log(novotexto);
        novoelemento.appendChild(novotexto);
        lista.appendChild(novoelemento);
    });

    const saidaDiv = document.getElementById("saida");
    saidaDiv.innerHTML = "";
    saidaDiv.appendChild(lista);
};

//document.body.appendChild(lista);