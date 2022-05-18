function login() {


    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let div = document.getElementById('message');
    let p = document.createElement('p');


    if (user == "sergio" && password == "lenda") {
        div.firstChild ? div.removeChild(div.firstChild) : false;
        p.style = "color: green;";
        p.innerHTML = "Seja Bem vindo!";

        div.appendChild(p);
    } else {
        div.firstChild ? div.removeChild(div.firstChild) : false;
        p.style = "color: red;";
        p.innerHTML = "Login incorreto!";
        document.getElementById('user').value = "";
        document.getElementById('password').value = "";

        div.appendChild(p);
    }


}