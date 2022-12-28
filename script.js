const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const clase = document.querySelector('.claseParrafo');
const id = document.querySelector('#idParrafo');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');


btn.addEventListener('click', () => {
    let suma = parseInt(input1.value) + parseInt(input2.value);
    // resultado.innerText = "El resultado de la suma es: " + suma;
    resultado.append("El resultado de la suma es: " + suma);
});