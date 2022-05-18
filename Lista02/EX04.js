function calculaParcela() {
    let parcelas = document.getElementById("parcela").value;
    let card = document.getElementById("card");


    card.lastChild ? card.removeChild(card.lastChild) : false;
    let p = document.createElement('p');
    p.innerHTML = parcelas + "X De " + (75.00 / parcelas);
    card.appendChild(p);


}