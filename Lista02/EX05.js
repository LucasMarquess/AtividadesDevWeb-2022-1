function calculaMedia(){

    let nota1 = document.getElementById('nota1').value;
    let nota2 = document.getElementById('nota2').value;
    let nota3 = document.getElementById('nota3').value;
    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;

    let p = document.createElement('p');
    let footer = document.getElementById("footer");

    if(media >= 7){
        footer.lastChild ? footer.removeChild(footer.lastChild) : false;
        p.style = "color: green;";
        p.innerHTML = "APROVADO";
        footer.appendChild(p);
    }
    if(media < 7 && media >= 5){
        footer.lastChild ? footer.removeChild(footer.lastChild) : false;
        p.style = "color: yellow;";
        p.innerHTML = "RECUPERAÇÃO";
        footer.appendChild(p);
    }
    if(media < 5){
        footer.lastChild ? footer.removeChild(footer.lastChild) : false;
        p.style = "color: red;";
        p.innerHTML = "REPROVADO PELO RODRIGO";
        footer.appendChild(p);
    }
}