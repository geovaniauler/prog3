fetch('http://127.0.0.1:5500/Exemplos-JavaScript-JSON/equipes.json')
    .then(response => response.json())
    .then(data => {
        const equipes = data.equipes;
        let tabela = "<table border='1'><tr>";
        // Cabeçalho
        tabela += `<th>Nome</th><th>Estado</th><th>Ranking FIFA</th><th>Treinador</th><th>Mundial</th>`;
        tabela += "</tr>";
        // Linhas
        equipes.forEach(item => {
            tabela += "<tr>";
            tabela += `<td>${item.nome}</td>`;
            tabela += `<td>${item.estado}</td>`;
            tabela += `<td>${item.rankingFifa}</td>`;
            tabela += `<td>${item.treinador.nome} ${item.treinador.sobrenome}</td>`;
            tabela += `<td>${item.mundial ? "Sim" : "Não"}</td>`;
            tabela += "</tr>";
        });
        tabela += "</table>";
        document.getElementById("saida").innerHTML = tabela;
    });