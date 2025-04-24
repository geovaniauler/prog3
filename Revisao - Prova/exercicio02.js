function calc(){
    const n1 = document.getElementById('n1').value;
    console.log(n1);

    const n2 = document.getElementById('n2').value;
    console.log(n2);

    const radio = document.getElementsByName('op');

    let opcao = "";
    let saida = "";
    for (let i=0; i < radio.length; i++){
        if (radio[i].checked){
            opcao = radio[i].value
        };
    };

    if (opcao == 'soma'){
        let res = n1+n2;
        saida += `O resultado da Soma entre ${n1} e ${n2} é ${res}`
    }
    if (opcao == 'sub'){
        let res = n1-n2;
        saida += `O resultado da Subtraçao entre ${n1} e ${n2} é ${res}`
    }
    if (opcao == 'mult'){
        let res = n1*n2;
        saida += `O resultado da Multiplicaçao entre ${n1} e ${n2} é ${res}`
    }
    if (opcao == 'div'){
        let res = n1/n2;
        saida += `O resultado da Divisao entre ${n1} e ${n2} é ${res}`
    }

    document.querySelector('#resultado').textContent = saida
};
