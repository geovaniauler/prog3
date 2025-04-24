function cadastro(){
    nome = document.getElementById('nomecompleto').value;
    console.log(nome);    
    cpf = document.getElementById('cpf').value;
    console.log(cpf);
    email = document.getElementById('email').value;
    console.log(email);
    telefone = document.getElementById('telefone').value;
    console.log(telefone);

    const table = document.createElement('table')

    const tabela = [nome, cpf, email, telefone];
    console.log(tabela);
    
    tabela.forEach(linha => {
        const tr = document.createElement('tr');
        linha.forEach(coluna => {
            const td = document.createElement('td');
            const texto = document.createTextNode(coluna);
            td.append(texto);
            tr.append(td);
        });
        table.append(tr);
    });
    document.body.append(table);

}




//const tabela = [`${nome}, ${cpf}, ${email}, ${telefone}`];
//console.log(tabela);
