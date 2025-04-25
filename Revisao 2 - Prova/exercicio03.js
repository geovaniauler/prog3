let objetos = [];

function criarobjeto(){
    let timemarcado = document.getElementById('timecheck').checked;
    let treinmarcado = document.getElementById('treincheck').checked;
    let estadiomarcado = document.getElementById('estadiocheck').checked;
    let cidademarcado = document.getElementById('cidadecheck').checked;
    let objeto = {
        nomedotime: '',
        treinador: '',
        estadio: '',
        cidade: ''
    }
    if (timemarcado){
        objeto.nomedotime = document.getElementById('time').value;
        //document.getElementById('saida').innerText += objeto.nomedotime + " "
    }
    if (treinmarcado){
        objeto.treinador = document.getElementById('trein').value;
        //document.getElementById('saida').innerText += objeto.treinador + " "
    }
    if (estadiomarcado){
        objeto.estadio = document.getElementById('estadio').value;
        //document.getElementById('saida').innerText += objeto.estadio + ' '
    }
    if (cidademarcado){
        objeto.cidade = document.getElementById('cidade').value;
        //document.getElementById('saida').innerText += objeto.cidade + ' '
    }
    objetos.push(objeto);
    console.log(objetos);

    document.getElementById('saida').innerText = '';

    objetos.forEach(obj => {
        let objString = '';
    //    for (key in obj){
    //        objString += `${obj[key]} `;
    //    }
        objString += `${obj.nomedotime} ${obj.treinador} ${obj.estadio} ${obj.cidade}`;

        document.getElementById('saida').innerText += `${objString} \n`;
    });
    
}