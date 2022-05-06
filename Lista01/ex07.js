var nomes = [],
    email = []

function inserir(){
        nomes.push(document.getElementById('txt1').value);
        email.push(document.getElementById('txt2').value);
}

function listar(){
    var cont = nomes.length;
    var tmp = ""; 

    document.getElementById('lista').innerHTML = "";

    tmp = document.getElementById('lista');
    for (i=0; i<cont; i++){
        
       tmp.innerHTML += "<li>" + nomes[i] + " - "+ email[i] + "</li>";
    }


}