function calcula(){
    var date = prompt("Insira uma data no seguinte formato dd/mm/yyyy");
    var novaData = date.split("/");
    var mes = ["janeiro", "fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var data = `${novaData[0]} de ${mes[novaData[1].replace(0, "") - 1]} de ${novaData[2]} `;
    document.write(data);
}