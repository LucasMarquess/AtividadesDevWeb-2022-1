function criar(){
    janela = window.open('');
}

function escrever(){
    janela.document.write("ESCREVENDO");
}

function mudar(){
    janela.document.bgColor = "blue";
    janela.document.fgColor = "white";
}

function fechar(){
    janela.close();
}