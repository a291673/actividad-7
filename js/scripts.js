function operacion(num1,num2){
    return num1 + num2;
}

const opFlecha = () => {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    ope =document.getElementById('operacion').value;
    var resultado;
    if(ope == 1){
        resultado = parseInt(valor1) + parseInt(valor2);
    }
    if(ope == 2){
        resultado = parseInt(valor1) - parseInt(valor2);
    }
    if(ope == 3){
        resultado = parseInt(valor1) * parseInt(valor2);
    }  
    if(ope == 4){
        resultado = parseInt(valor1) / parseInt(valor2);
    }
    document.getElementById('resultado').innerHTML = resultado;
}