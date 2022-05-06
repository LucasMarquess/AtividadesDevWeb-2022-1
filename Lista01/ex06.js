function validateForm() {
    let x = document.forms["form"]["date"].value;
    var separacaoDate = x.split("-");

    if (parseInt(separacaoDate[0]) >= 2022) {
        showError("O Ano é invalido"); 
    } else if (parseInt(separacaoDate[1]) > 12) {
        showError("O Mês é invalido");
    } else if (parseInt(separacaoDate[2]) > 31) {
        showError("O dia é invalido");
    } else {
        let input = document.forms["form"]["date"];
        input.style.backgroundColor = "white";
        document.getElementById("erro").innerHTML = "";
    }

    return false;
}
function showError(mensagem) {
    let input = document.forms["form"]["date"];
    document.getElementById("erro").innerHTML = mensagem;
    input.style.backgroundColor = "yellow";
    input.focus();
}