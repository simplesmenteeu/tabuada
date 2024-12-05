function calculaTabuada() {
    //Obtendo elementos da DOM
    let tabuada = document.querySelector("#tabuada tbody");
    let valorA = document.querySelector("#valorA");

    //Validando Inputs
    if(valorA.value.length == 0){
        window.alert("Por favor digite um numero valido");
        return;
    }

    let numero = parseInt(valorA.value);

    //limpando a tabuada

    tabuada.innerHTML = '';

    for(let valorB = 0; valorB <=10; valorB++){
    
        let resultado = numero * valorB;
        let template = `
        <td>${numero}</td>
        <td>X</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
        `;

        let tr = document.createElement('tr');
        tr.innerHTML = template;

        tr.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0'
        });
        tr.addEventListener('mouseout', function(){
            this.style.backgroundColor = ''
        });
        tabuada.appendChild(tr);
    }
}

calculaTabuada();

document.querySelector("#valorA").addEventListener('change', calculaTabuada);
document.querySelector("#valorA").addEventListener('input', calculaTabuada);