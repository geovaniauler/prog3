function localStorageSet() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const checkbox = document.getElementById('checkbox').checked;

    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);
    localStorage.setItem('rua', rua);
    localStorage.setItem('numero', numero);
    localStorage.setItem('complemento', complemento);
    localStorage.setItem('cep', cep);
    localStorage.setItem('cidade', cidade);
    if (checkbox) {
        localStorage.setItem('checkbox', 'checked');
        localStorage.setItem('email', email);
    }
    else {
        localStorage.removeItem('checkbox');
        localStorage.removeItem('email');
    }

    alert('Dados salvos com sucesso!');
}

function sessionStorageSet() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const checkbox = document.getElementById('checkbox').checked;

    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('sobrenome', sobrenome);
    sessionStorage.setItem('rua', rua);
    sessionStorage.setItem('numero', numero);
    sessionStorage.setItem('complemento', complemento);
    sessionStorage.setItem('cep', cep);
    sessionStorage.setItem('cidade', cidade);
    if (checkbox) {
        sessionStorage.setItem('checkbox', 'checked');
        sessionStorage.setItem('email', email);
    }
    else {
        sessionStorage.removeItem('checkbox');
        sessionStorage.removeItem('email');
    }

    alert('Dados salvos com sucesso!');
}

function cookiesSet() {
    console.log(navigator.cookieEnabled);
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const checkbox = document.getElementById('checkbox').checked;

    document.cookie = `nome=${nome}; path=/`;
    document.cookie = `sobrenome=${sobrenome}; path=/`;
    document.cookie = `rua=${rua}; path=/`;
    document.cookie = `numero=${numero}; path=/`;
    document.cookie = `complemento=${complemento}; path=/`;
    document.cookie = `cep=${cep}; path=/`;
    document.cookie = `cidade=${cidade}; path=/`;
    if (checkbox) {
        document.cookie = `checkbox=checked; path=/`;
        document.cookie = `email=${email}; path=/`;
    }
    else {
        document.cookie = `checkbox=; expired; path=/`;
        document.cookie = `email=; expired; path=/`;
    }

    alert('Dados salvos com sucesso!');
}
