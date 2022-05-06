var cor='';
function PreviewPagina(){
    
    //Criando o titulo da nova página 
    var janela = window.open('');
    var h1 = document.createElement("h1");
    var textotitulo1 = document.createTextNode(document.getElementById('titulo1').value);
    var center = document.createElement("center");
    
    center.appendChild(h1);
    h1.appendChild(textotitulo1);
    janela.document.body.appendChild(center);
    
    //Criando o primeiro subtitulo da nova página 
    
    var h2 = document.createElement("h2");
    var textosubtitulo1 = document.createTextNode(document.getElementById('subtitulo1').value);
    
    h2.appendChild(textosubtitulo1);
    janela.document.body.appendChild(h2);

    //Criando o primeiro texto da nova página 
    
    var p = document.createElement("p");
    var textotextarea1 = document.createTextNode(document.getElementById('text1').value);
    
    p.appendChild(textotextarea1);
    janela.document.body.appendChild(p);   

    //Criando o segundo subtitulo da nova página 
    
    var textosubtitulo2 = document.createTextNode(document.getElementById('subtitulo2').value);
    var h22 = document.createElement("h2");
    var p22 = document.createElement("p");

    h22.appendChild(textosubtitulo2);
    janela.document.body.appendChild(h22);

    //Criando o segundo texto da nova página 
    
    var textotextarea2 = document.createTextNode(document.getElementById('text2').value);
    
    p22.appendChild(textotextarea2);
    janela.document.body.appendChild(p22);   
    
    //Atribuindo cor de fundo da página
    // janela.document.bgColor = (document.getElementById('op').value);

    var checkbox2 = document.getElementById('check2');
    var checkbox3 = document.getElementById('check3');
    var checkbox4 = document.getElementById('check4');
    
    if(checkbox2.checked){
        janela.document.bgColor = "red";
        cor= "red";
    }else 
        if(checkbox3.checked){
            janela.document.bgColor = "blue";
            cor= "blue";
        }else 
            if(checkbox4.checked){
                janela.document.bgColor = "yellow";
                cor= "yellow";
            }

}

function criarCodigo(){
    var codigo = document.getElementById('text3');
    codigo.innerHTML = "<body bgColor = '" + cor +"'>" + "<h1 align='center'>" + document.getElementById('titulo1').value + 
                        "</h1>" + "<br>" + 
                        "<h2>" + document.getElementById('subtitulo1').value + "</h2>" + "<br>" +
                        "<p>" + document.getElementById('text1').value + "</p>" + "<br>" + "</h1>" + "<br>" + 
                        "<h2>" + document.getElementById('subtitulo2').value + "</h2>" + "<br>" +
                        "<p>" + document.getElementById('text2').value + "</p>" + "</body>";
}