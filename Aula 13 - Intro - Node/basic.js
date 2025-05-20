const http = require('http');

const server = http.createServer((req,res) =>{
let cidade = {
    nome: "Feliz",
    estado: "RS",
    pais: "Brasil",
}

    //console.log(req.url, req.method, req.headers);
    res.write(JSON.stringify(cidade));
    res.end();
});


server.listen(3000);
console.log("Servidor Rodando");
