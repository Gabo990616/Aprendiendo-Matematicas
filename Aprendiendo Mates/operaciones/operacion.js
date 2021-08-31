function operacion() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    var operacion = document.getElementById("selOp").value;
    var resultado;
    if (operacion === "Suma") {

        resultado = parseInt(num1) + parseInt(num2);

    } else if (operacion === "Resta") {

        resultado = parseInt(num1) - parseInt(num2);

    } else if (operacion === "Multiplicación") {

        resultado = parseInt(num1) * parseInt(num2);

    } else if (operacion === "División") {
        if (num2 == 0)
            window.alert("No se puede dividir entre Cero")
        else
            resultado = parseInt(num1) / parseInt(num2);

    }
    document.getElementById("result").value = resultado;
}