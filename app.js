
function pegarValores(){
    var nome = document.querySelector('.usuarioNome')
    var senha = document.querySelector('.ususarioSenha')
    var botaoAcessar = document.querySelector('.acessar')
    console.log(nome.value)
    console.log(senha.value)

}
var buttonLogin = document.getElementById('btn-login')
buttonLogin.addEventListener('click',pegarValores)

