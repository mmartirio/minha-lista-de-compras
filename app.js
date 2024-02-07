
function salvarDadosUsuario() {
    var nome = document.getElementById("cadastroNome").value;
    var sobrenome = document.getElementById("cadastroSobreNome").value;
    var email = document.getElementById("cadastroEmail").value;

    // Armazenar os dados no localStorage
    localStorage.setItem("cadastroNome", nome);
    localStorage.setItem("cadastroSobreNome", sobrenome);
    localStorage.setItem("cadastroEmail", email);
}

// Função para exibir o nome completo do usuário na tela de boas-vindas
function exibirNomeCompleto() {
    // Recuperar os dados do localStorage
    var nome = localStorage.getItem("cadastroNome");
    var sobrenome = localStorage.getItem("cadastroSobreNome");
    var email = localStorage.getItem("cadastroEmail");

    // Construir o nome completo e exibir na tela
    var nomeCompleto = nome + " " + sobrenome;
    document.getElementById("perfilNome").value = nomeCompleto;

    var emailCompleto = email;
    document.getElementById("perfilEmail").value = emailCompleto;

}

// Chamar a função para exibir o nome completo quando a página carregar
window.onload = exibirNomeCompleto ;


function exibirEmailCompleto() {
    // Recuperar os dados do localStorage
    var emailCompleto = localStorage.getItem("cadastroEmail");
    

    // Construir o email e exibir na tela
    var emailCompleto = email;
    document.getElementById("perfilEmail").value = emailCompleto;

}

// Chamar a função para exibir o nome completo quando a página carregar
window.onload = exibirNomeCompleto;

//Função para mudar a foto do perfil
'use strict'

//gerar click do input file no botão de altar imagem
let foto = document.getElementById('carregaFoto');
let file = document.getElementById('fileImage');
let image = document.querySelector('.fotoPerfil')
foto.addEventListener('click', () =>{
    file.click();
});

//mostrar a imagem seleciona no espaço reservado para imagem
file.addEventListener('change', function() {
    let file = this.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
        }
        
        reader.readAsDataURL(file);
      }
    });


function pegarValores(){
    var nome = document.querySelector('.usuarioNome')
    var senha = document.querySelector('.ususarioSenha')
    var botaoAcessar = document.querySelector('.acessar')
    console.log(nome.value)
    console.log(senha.value)

}
var buttonLogin = document.getElementById('btn-login')
buttonLogin.addEventListener('click',pegarValores);



   