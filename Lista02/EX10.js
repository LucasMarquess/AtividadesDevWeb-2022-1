function listar() {
    var vet = document.getElementsByTagName("ul");

    var qtd1 = vet[0].children.length;

    const elem2 = document.createElement("p");
    elem2.innerHTML = ("Quantidade de itens: " + qtd1);
    document.getElementById("div").appendChild(elem2);

    for (var i = 0; i < qtd1; i++) {
        const elem = document.createElement("p");
        elem.innerHTML = vet[0].children[i].innerText;
        document.getElementById("div").appendChild(elem);
    }


}

function inserir() {
    var elemento = document.getElementById("elemento");
    var valor = document.getElementById("elemento").value;

    if (valor === "") {
        const elem3 = document.createElement("p");
        elem3.innerHTML = ("Por favor digite um item");
        document.getElementById("divInserir").appendChild(elem3);
    } else {
        const novaLi = document.createElement("li");
        novaLi.appendChild(document.createTextNode(valor));
        var vet2 = document.getElementsByTagName("ul");
        var pos = parseInt(document.getElementById("posicao").value);

        var qtd2 = vet2[0].children.length;
        var aux=0;
        if (pos > qtd2) {
            
            var retorno = window.confirm("Posição inexistente, deseja inserir no final?");
            if (retorno == true) {
               
                vet2[0].appendChild(novaLi);
                aux=1;
            }
        }
        var posString = document.getElementById("posicao").value;
        if (posString === "") {
            vet2[0].appendChild(novaLi);
            aux=1;
        }

        if (aux === 0){
            var itens = document.getElementsByTagName("li");
            vet2[0].insertBefore(novaLi, itens[pos-1]);
            
        }
        var campo = document.getElementById("elemento");
        campo.value = "";
        campo.focus();

        var campo2 = document.getElementById("posicao");
        campo2.value = "";

    }
}

function foco() {
    var campo = document.getElementById("elemento");
    campo.style.backgroundColor = "yellow";
}

function desfoco() {
    var campo = document.getElementById("elemento");
    campo.style.backgroundColor = "white";
}