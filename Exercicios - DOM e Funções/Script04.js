const pessoas = [
    ['Nome', 'Idade', 'Profissão'],
    ['Ted', '22', 'Estudante'],
    ['Ralf', '26', 'Designer'],
];

function msg(){
    const novaLinha = document.getElementsByName('dados')[0, 1, 2].value;
    cidades.push(novaLinha);
    const table = document.createElement('table')

    pessoas.forEach(linha => {
        const tr = document.createElement('tr');
        linha.forEach(coluna => {
            const td = document.createElement('td');
            const texto = document.createTextNode(coluna);
            td.append(texto);
            tr.append(td);
        });
        table.append(tr);
    });
};
document.body.append(table);