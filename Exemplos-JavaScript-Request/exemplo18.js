// exemplo18.js
// Tratamento de erro com catch
// JSON inexistente

fetch('http://127.0.0.1:5500/pessoa.json')
    .then(response => {
        if(response.status < 200 || response.status >= 300) {
            throw new Error(`ERRO - Status: ${response.status}.`);
        }
        console.log('Não chegou aqui.');
        return response.json();
    }).then( data => {
        console.log(data)
    }).catch( error => {
        console.log('Caiu no catch().');
        console.log(error);
    })
