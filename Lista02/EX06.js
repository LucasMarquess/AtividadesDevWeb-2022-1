var hasUl = false;

//EX06
function listar6(){
    if(!hasUl){
        let container = document.getElementById("container");
        let lis = document.getElementsByTagName('li');
    
        let ul = document.createElement('ul');
        
        for(var i=0; i < lis.length; i++){
            var li = document.createElement('li');
            li.innerHTML = lis[i].innerHTML;
            ul.appendChild(li);    
        }
        
        container.appendChild(ul);
        this.hasUl = true;
    }
}

//EX07
function listar7(){
    let container = document.getElementById("container");
    let uls = document.getElementsByTagName('ul');
    let ulClone = uls[1].getElementsByTagName('li');
    let p = document.createElement('p');
    p.innerHTML = "Ex7";

    container.appendChild(p);

    let ul = document.createElement('ul');
        
    for(var i=0; i < ulClone.length; i++){
        var li = document.createElement('li');
        li.innerHTML = ulClone[i].innerHTML;
        ul.appendChild(li);    
    }

    container.appendChild(ul);
}

//EX08
function inserirItem() {

    var campoInput = document.createElement('input');
    campoInput.id = 'input1';
    campoInput.type = 'text';
    campoInput.placeholder = 'Digite o novo item da lista';
    campoInput.className = 'form-control';
    document.getElementById('container').append(campoInput);

    var btnInserir = document.createElement('BUTTON');
    var lbl = document.createTextNode("Inserir item");
    btnInserir.id = 'btnInserir';
    btnInserir.appendChild(lbl);
    btnInserir.className = 'btn btn-success mt-3 mb-3 col-2';
    document.getElementById('container').append(btnInserir);


    btnInserir.onclick = function() {

        var lista = document.getElementById('list1');
        texto = document.createTextNode(campoInput.value);
        var novoLi = document.createElement('li');  
        novoLi.className = 'list-group-item list-group-item-primary';
        
            if(document.getElementById('input1').value == ''){
                alert('Digite algo antes de inserir');
                document.getElementById('input1').focus();
            }else{
                novoLi.appendChild(texto);
                lista.append(novoLi);
    
                

                document.getElementById('input1').focus();
                document.getElementById('input1').value = '';
            }

            
    }

}

function listar8() {
    var contadorDeNos = document.getElementById('list1').childElementCount;
    var filhos = document.getElementsByTagName('li');

    var div1 = document.createElement('div');
    var p1 = document.createTextNode('Quantidade de elementos da lista: ' + filhos.length);
    div1.appendChild(p1);
    document.getElementById('container').append(div1);

    var div2 = document.createElement('div');
    var lista = document.createElement('ul');

    lista.className = 'list-group';
    var texto;
    for (var i = 0; i < contadorDeNos; i++) {
        texto = document.createTextNode(filhos[i].textContent);
        var li = document.createElement('li');
        li.appendChild(texto);
        lista.append(li);
        li.className = 'list-group-item list-group-item-warning';
    }

    div2.append(lista);

    var btn2 = document.createElement('BUTTON');
    var lbl = document.createTextNode("Referenciar segunda lista");
    btn2.appendChild(lbl);
    btn2.className = 'btn btn-warning mt-3 mb-3';

    btn2.onclick = function () {

        var novaLista = document.createElement('ul');

        for (var i = 0; i < document.getElementsByTagName('ul')[1].childElementCount; i++) {
            texto = document.createTextNode(document.getElementsByTagName('ul')[1].childNodes[i].textContent);
            var novoLi = document.createElement('li');
            novoLi.appendChild(texto);
            novaLista.append(novoLi);
            novoLi.className = 'list-group-item list-group-item-dark';
        }

        div2.append(novaLista);
    }

    div2.appendChild(btn2);
    document.getElementById('container').append(div1, div2);

}

//EX09
function inserirItem() {
    //document.getElementById('btn1').onfocus();

    var campoInput = document.createElement('input');
    campoInput.id = 'input1';
    campoInput.type = 'text';
    campoInput.placeholder = 'Digite o novo item da lista';
    campoInput.className = 'form-control';
   
    document.getElementById('container').append(campoInput);

    campoInput.onfocus = function(){
        campoInput.style.backgroundColor = '#f0e68c';
    }

    campoInput.onblur = function(){
        campoInput.style.backgroundColor = 'white';
    }

    var btnInserir = document.createElement('BUTTON');
    var lbl = document.createTextNode("Inserir item");
    btnInserir.id = 'btnInserir';
    btnInserir.appendChild(lbl);
    btnInserir.className = 'btn btn-primary mt-3 mb-3 col-2';
    document.getElementById('container').append(btnInserir);



    btnInserir.onclick = function() {

        var lista = document.getElementById('list1');
        texto = document.createTextNode(campoInput.value);
        var novoLi = document.createElement('li');  
        novoLi.className = 'list-group-item list-group-item-primary';
        
            if(document.getElementById('input1').value == ''){
                alert('Digite algo antes de inserir');
                document.getElementById('input1').focus();
            }else{
                novoLi.appendChild(texto);
                lista.append(novoLi);
    
                

                document.getElementById('input1').focus();
                document.getElementById('input1').value = '';
            }

            
    }

}

function listar9() {
    
    var contadorDeNos = document.getElementById('list1').childElementCount;
    var filhos = document.getElementsByTagName('li');

    var div1 = document.createElement('div');
    var p1 = document.createTextNode('Quantidade de elementos da lista: ' + filhos.length);
    div1.appendChild(p1);
    document.getElementById('container').append(div1);

    var div2 = document.createElement('div');
    var lista = document.createElement('ul');

    lista.className = 'list-group';
    var texto;
    for (var i = 0; i < contadorDeNos; i++) {
        texto = document.createTextNode(filhos[i].textContent + ' SEGUNDA LISTA');
        var li = document.createElement('li');
        li.appendChild(texto);
        lista.append(li);
        li.className = 'list-group-item list-group-item-warning';
    }

    div2.append(lista);

    var btn2 = document.createElement('BUTTON');
    var lbl = document.createTextNode("Referenciar segunda lista");
    btn2.appendChild(lbl);
    btn2.className = 'btn btn-warning mt-3 mb-3';

    btn2.onclick = function () {

        var novaLista = document.createElement('ul');

        for (var i = 0; i < document.getElementsByTagName('ul')[1].childElementCount; i++) {
            texto = document.createTextNode(document.getElementsByTagName('ul')[1].childNodes[i].textContent);
            var novoLi = document.createElement('li');
            novoLi.appendChild(texto);
            novaLista.append(novoLi);
            novoLi.className = 'list-group-item list-group-item-dark';
        }

        div2.append(novaLista);
    }

    div2.appendChild(btn2);
    document.getElementById('container').append(div1, div2);

}