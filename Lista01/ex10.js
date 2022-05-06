users = [
    'administrador',
    'professor',
    'aluno',
    'estagiario',
    'funcionario',
    'pesquisador',

]

passwords = [
    'administrador123',
    'professor123',
    'aluno123',
    'estagiario123',
    'funcionario123',
    'pesquisador123',
]


function login(){
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(password.length < 8){
        alert("A senha digitada possui menos de 8 caracters, favor adicionar uma válida.");
    }else{
        for (let index = 0; index < users.length; index++) {
            if(users[index] == user && passwords[index] == password){
                window.location.href = "contato.html";
            }  
        }
    }
}