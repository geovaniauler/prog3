function calcular(){
    num1 = document.querySelector('#num1').value
    console.log(num1);
    num2 = document.querySelector('#num2').value

    radio = document.getElementsByName('radio')

    let opcao = '';
    let res = '';
    let saida = '';

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            opcao = radio[i].value;
        }
    }
    if (opcao == 'soma') {
        res = num1 + num2;
        saida += `O resultado da Soma é ${res}`
        console.log(saida);
        
    }
    document.getElementById('saida').textContent = saida;

}