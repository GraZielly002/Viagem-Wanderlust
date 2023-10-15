function mostrarOcultarSenha(){
    var senha=document.getElementById("senha");
    if(senha.type=="password"){
        senha.type="text";
    } else if (senha.type=="text"){
        senha.type="password";
    }

}
function enviar(){
    var dados={//nome:document.getElementById('nome').value,
                user:document.getElementById('usuario').value,
                //email:document.getElementById('email').value,
                //senha:document.getElementById("senha").value
            };
    if(dados){
        window.alert('Dados cadastrados');
        window.alert(`Prazer em te conhecer ${dados.user}`);
    }
}