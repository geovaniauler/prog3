function cadastrar(){
    let nome = document.querySelector('#nome').value;
    console.log(nome);
    let cpf = document.querySelector('#cpf').value;
    console.log(cpf);
    let email = document.querySelector('#email').value;
    console.log(email);
    let telefone = document.querySelector('#tele').value;
    console.log(telefone);
    
    let table = document.createElement('tr');

    let novonome = document.createElement('td');
    let textnome = document.createTextNode(nome);
    novonome.append(textnome);
    console.log(novonome);

    let novocpf = document.createElement('td');
    let textcpf = document.createTextNode(cpf);
    novocpf.append(textcpf);

    let novoemail = document.createElement('td');
    let textemail = document.createTextNode(email);
    novoemail.append(textemail);

    let novotele = document.createElement('td');
    let texttele = document.createTextNode(telefone);
    novotele.append(texttele);
    
    table.append(novonome);
    table.append(novocpf);
    table.append(novoemail);
    table.append(novotele);
    
    document.querySelector('#tabela').append(table);

}