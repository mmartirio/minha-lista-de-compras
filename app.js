'use strict'

let foto = document.getElementById('carregaFoto');
let file = document.getElementById('fileImage');
let image = document.querySelector('.fotoPerfil')
foto.addEventListener('click', () =>{
    file.click();
});


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





document.getElementById('carregarFoto').addEventListener('click', function() {
    document.getElementById('fileImage').click();
});

document.getElementById('fileImage').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('photo').src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    });