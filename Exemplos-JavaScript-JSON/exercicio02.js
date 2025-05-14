fetch('http://127.0.0.1:5500/Exemplos-JavaScript-JSON/equipes.json')
    .then(response =>{
        return response.json();
    }).then(data =>{
        const ul = document.querySelector('#lista');
        data.forEach(element => {
        const text = `${element.title}: ${element.body}`;
        const li = document.createElement('li');
        const t = document.createTextNode(text);
        li.append(t);
        ul.append(li);
        });
    });