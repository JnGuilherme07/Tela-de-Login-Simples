function btn(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var texto;

    if(senha=== "1234" && login=== "1234"){
        texto= "Você está logado!"
    }

    else{
        texto= "Falha no login!"
    }

    document.getElementById('resultado'). innerText=texto
}