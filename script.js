//2
let userName = document.getElementById('nome');
let nomeVer = document.getElementById('mostrar');

function mostrarNome(){
    nomeVer.innerHTML = `Olá, ${userName.value}, tudo bem?`
}

//3
let valorCm = document.getElementById('valorCentimetros');
let valorMetros = document.getElementById('valorMetros');

function cambio(){
    valorMetros.innerHTML = `${parseFloat(valorCm.value)}cm em metros é igual a ${parseFloat(valorCm.value) / 100}m`;
}

//4
let asNum = document.getElementById('afterBeforeNumber');
let asMostrar = document.getElementById('afterBeforeNumber_resultado');

function descobrir(){
    asMostrar.innerHTML = `O antecessor de ${parseFloat(asNum.value)} é ${parseFloat(asNum.value) - 1} e seu sucessor é ${parseFloat(asNum.value) + 1}` 
}

//5
let mmNum1 = document.getElementById('maiorMenorNum'); 
let mmNum2 = document.getElementById('maiorMenorNum2');
let ansComparacao = document.getElementById('ansComparacao')
function comparar(){
    if(parseFloat(mmNum1.value) > parseFloat(mmNum2.value)){
        ansComparacao.innerHTML = `${parseFloat(mmNum1.value)} é maior que ${parseFloat(mmNum2.value)}`
    }else if(parseFloat(mmNum2.value) > parseFloat(mmNum1.value)){
        ansComparacao.innerHTML = `${parseFloat(mmNum2.value)} é maior que ${parseFloat(mmNum1.value)}`
    }else{
        ansComparacao.innerHTML ='os numeros sao iguais'
    }
}

//6
let salarioInicial = document.getElementById('salarioNum');
let salarioFinal = document.getElementById('aumentoValorFinal');


function aumento(){
    if(parseFloat(salarioInicial.value) > 1250){
        let aumento = (parseFloat(salarioInicial.value) * 0.10)
        salarioFinal.innerHTML = `Tudo bem, o aumento será de ${Math.round(aumento)} e seu salário final será de ${parseFloat(salarioInicial.value) + aumento}`
    } else if(parseFloat(salarioInicial.value) <= 1250){
        let aumento = (parseFloat(salarioInicial.value) * 0.15)
        salarioFinal.innerHTML = `Tudo bem, o aumento será de ${Math.round(aumento)} e seu salário final será de ${parseFloat(salarioInicial.value) + aumento}`
    }else {
        salarioFinal.innerHTML = 'cade o salario'
    }
}

//7
let numero = 1;
while(numero <= 100){
    console.log(numero);
    numero++
}

//8
let numero2 = 0;
while(numero2 <= 50){
    console.log(numero2)
    numero2 = numero2 + 5
}

//9 
let numero3 = 100;
while(numero3 >= 0){
    console.log(numero3)
    numero3 = numero3 - 10;
}