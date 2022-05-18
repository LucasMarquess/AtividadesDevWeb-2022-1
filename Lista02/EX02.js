function exibe(){
    // 1
    let body = document.documentElement.lastChild;
    let p = document.createElement("p");
    p.innerText = "Texto do paragrafo sem as tags:";
    
    let texto = document.createElement("p");

    let paragrafo = document.getElementById("paragrafo")
    texto.innerHTML = paragrafo.innerText;
    
    body.appendChild(p);
    body.appendChild(texto);

    //2 
    let spanText = document.createElement("p");
    let spans = document.getElementsByTagName("span");
    spanText.innerHTML = "Conteudo dentro das tags span: ";
    spanText.innerHTML  += spans[0].innerHTML;
    spanText.innerHTML  += spans[1].innerHTML;

    body.appendChild(spanText);

    //3
    let list = document.createElement("p");
    list = document.getElementsByTagName("li")[5];
    body.appendChild(list);

    this.exibirInnerHTML(paragrafo);
    this.exibirInnerHTML(paragrafo.childNodes[3].lastChild);
    this.exibirInnerHTML(document.getElementById("item"));
}

// 4
function exibirInnerHTML(element){
    console.log(element.innerHTML);
}