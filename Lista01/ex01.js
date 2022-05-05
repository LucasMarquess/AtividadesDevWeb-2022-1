function calcula(){
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    document.getElementById("operacao1").innerHTML = valor1 + " + " + valor2;
    document.getElementById("operacao2").innerHTML = valor1 + " * " + valor2;
    document.getElementById("operacao3").innerHTML = valor1 + " / " + valor2;
    document.getElementById("operacao4").innerHTML = valor1 + " % " + valor2;

    document.getElementById("resultado1").innerHTML = valor1 + valor2;
    document.getElementById("resultado2").innerHTML = valor1 * valor2;
    document.getElementById("resultado3").innerHTML = valor1 / valor2;
    document.getElementById("resultado4").innerHTML = valor1 % valor2;
}