var checboxList = [];

function validateForm() {
    console.log(checboxList);
    var itens = checboxList.filter((x) => x != null && x != "");
    if (itens.length === 0) {
        alert("Você não selecionou nenhum checkbox1");
    } else {
        alert("Sucesso seu form foi enviado!");
    }
}

function toggleCheckbox(elemento) {
    if (elemento.checked == true) {
        checboxList.push(elemento.id);
    } else {
        let index = checboxList.find((x) => x === elemento.id);
        checboxList.splice(index, 1);
    }
}