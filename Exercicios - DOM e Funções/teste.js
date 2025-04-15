// Função para adicionar uma cidade à lista
function adiciona(lista, cidade) {
    const e = document.createElement('li');
    const t = document.createTextNode(cidade);
    e.append(t);
    lista.append(e);
}

// Array inicial de cidades
const cidades = ['Feliz', 'Bom Princípio', 'Alto Feliz', 'Vale Real', 'Harmonia', 'Tupandi'];

// Seleciona a lista ordenada (<ol>) pelo ID
const lista = document.getElementById('listaCidades');

// Adiciona as cidades iniciais à lista
cidades.forEach(cidade => {
    adiciona(lista, cidade);
});

// Captura o formulário e adiciona um ouvinte de eventos
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Obtém o valor do campo de entrada
    const cidadeInput = document.getElementById('cidadeInput');
    const novaCidade = cidadeInput.value.trim(); // Remove espaços extras

    // Verifica se o campo não está vazio
    if (novaCidade !== '') {
        // Adiciona a nova cidade à lista
        adiciona(lista, novaCidade);

        // Limpa o campo de entrada
        cidadeInput.value = '';
    } else {
        alert('Por favor, digite o nome de uma cidade.');
    }
});