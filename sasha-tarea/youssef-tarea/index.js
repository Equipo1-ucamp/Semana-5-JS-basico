function promedio() {

    var calificacion1 = document.getElementById("calificacion1").value;
    calificacion1 = Number(calificacion1);
    let calificacion2 = document.getElementById("calificacion2").value;
    calificacion2 = Number(calificacion2);
    var calificacion3 = document.getElementById("calificacion3").value;
    calificacion3 = Number(calificacion3);
    var calificacion4 = document.getElementById("calificacion4").value;
    calificacion4 = Number(calificacion4);
    var calificacion5 = document.getElementById("calificacion5").value;
    calificacion5 = Number(calificacion5);
    if ((calificacion1 < 0 || calificacion1 > 100) || (calificacion2 < 0 || calificacion2 > 100) || (calificacion3 < 0 || calificacion3 > 100) || (calificacion4 < 0 || calificacion4 > 100) || (calificacion5 < 0 || calificacion5 > 100)) {
        alert("Favor de revisar que todas las calificaciones sean mayor a 0 y menor a 100");
    } else {
        var resultado = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) / 5;
        document.getElementById("resultado").value = resultado;
        if (resultado >= 70) {
            document.getElementById("Mensaje").value = "APROBADO";
        }
        if (resultado < 70) {
            document.getElementById("Mensaje").value = "NO APROBADO";
        }
    }

}
function lettersonly(input) {
    var regex = /[^0-9]/;
    input.value = input.value.replace(regex, "");
}
function limpiar() {
    for (let i = 1; i < 6; i++) {
        document.getElementById("calificacion" + i).value = "";
    }
    document.getElementById("resultado").value = "";
    document.getElementById("Mensaje").value = "";
}

function calculadora() {

    let valido = false;
    let valor1 = "";
    let valor2 = "";
    let operador = "";
    while (!valido) {
        valor1 = prompt('¿Favor de ingresar el primer número');

        if (valor1 === null || valor1 === '') {
            alert('Favor de ingresar un valor numérico');
        }
        else {
            if (!isNaN(valor1)) {
                valido = true;
            } else {
                alert('Favor de ingresar un valor numérico');
            }
        }
    }
    valido = false;
    while (!valido) {
        operador = prompt('¿Favor de ingresar el operador');

        switch (operador) {
            case '+':
            case '-':
            case '/':
            case '*': valido = true;
                break;
        }
        if (!valido) {
            alert('Favor de ingresar un operador válido');
        }
    }
    valido = false;
    while (!valido) {
        valor2 = prompt('¿Favor de ingresar el segundo número');
        if (valor2 === null || valor2 === '') {
            alert('Favor de ingresar un valor numérico');
        } else {
            if (!isNaN(valor2)) {
                valido = true;
            } else {
                alert('Favor de ingresar un valor numérico');
            }
        }
    }
    valor1 = Number(valor1);
    valor2 = Number(valor2);
    let resultado = 0;
    if (operador == '+') {
        resultado = valor1 + valor2;
    }
    if (operador == '-') {
        resultado = valor1 - valor2;
    }
    if (operador == '/') {
        resultado = valor1 / valor2;
    }
    if (operador == '*') {
        resultado = valor1 * valor2;
    }

    alert('El resultado de la operación es: ' + resultado);
    let respuesta = prompt('¿Desea realizar otra operación?Y=Continuar - Cualquier otra tecla para salir')
    switch (respuesta) {
        case "Y":
        case "y": calculadora();
            break;
        default: alert("Gracias por utilizar nuestra Calculadora")
            break;
    }

}
//calculadora();

function abuela() {
    let contador = 0;
    let mensaje = "";

    while (contador < 3) {
        mensaje = prompt('Dile algo a tu abuela');
        if (mensaje.toUpperCase().includes('ADIÓS TQM') || mensaje.toUpperCase().includes('ADIOS TQM')) {
            let mensajeArr = mensaje.toUpperCase().split("ADIÓS TQM");
            let mensajeArr2 = mensaje.toUpperCase().split("ADIOS TQM");
            contador = Number(contador) + Number(mensajeArr.length - 1)+ Number(mensajeArr2.length - 1);
            if(contador<3){
                alert('¡¿EH?! ¡NO TE ESCUCHO, HIJO!');
            }
        } else {
            if (mensaje.includes("¡") && mensaje.includes("!")) {
                alert('NO, NO DESDE 1983');
            } else {
                alert('¡¿EH?! ¡NO TE ESCUCHO, HIJO!');
            }
        }
    }
    alert("Usted ha dejado de hablar con su abuela.")
}
