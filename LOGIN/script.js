 function btn(){
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var texto;

    if(senha=== "1234" && login=== "USUARIO1"){
        texto= "Você está logado!"
        window.location.href= "https://ge.globo.com/futebol/times/sao-paulo/"
    }

    if(senha=== "1234" && login=== "USUARIO2"){
        texto= "Você está logado!"
        window.location.href= "https://ge.globo.com/futebol/times/sao-paulo/"
    }

    else{
        texto= "Falha no login!"
    }

    document.getElementById('resultado'). innerText=texto
}