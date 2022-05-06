function calculaSalario(){
    var salarioAtual = parseFloat(prompt("Insira o salário atual:"));

    var percentual = 0;
    var valorAcrescentado = 0;
    var novoSalario = 0;

    if (salarioAtual <= 280.0) {
        percentual = 20;
        valorAcrescentado = (salarioAtual / 100) * percentual;
        novoSalario = valorAcrescentado + salarioAtual;
    } else if (salarioAtual > 280.0 && salarioAtual <= 700.0) {
        percentual = 15;
        valorAcrescentado = (salarioAtual / 100) * percentual;
        novoSalario = valorAcrescentado + salarioAtual;
    } else if (salarioAtual > 7000.0 && salarioAtual <= 1500.0) {
        percentual = 10;
        valorAcrescentado = (salarioAtual / 100) * percentual;
        novoSalario = valorAcrescentado + salarioAtual;
    } else {
        percentual = 5;
        valorAcrescentado = (salarioAtual / 100) * percentual;
        novoSalario = valorAcrescentado + salarioAtual;
    }
    document.write(`<t2>Salario Atual: ${salarioAtual}<br>Percentual: ${percentual}<br>Valor do aumento: ${valorAcrescentado}<br>Novo Salario: ${novoSalario} </t>`);
}