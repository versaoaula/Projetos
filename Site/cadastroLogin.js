function cadastrarLogin(){

  var nomeUsuario = document.getElementById('nomeUsuario').value
  var sobrenomeUsuario = document.getElementById('sobrenomeUsuario').value
  var user = document.getElementById('user').value
  var password = document.getElementById('password').value
  var password2 = document.getElementById('password2').value
  var compara = new Boolean(true);

  if ((password == '') || (password2 == '') || (nomeUsuario == '') || (sobrenomeUsuario == '') || (user == '')){
    alert("Nenhuma das senhas podem ficar sem preencher!");
    return false
  }else if ((compara == true) && (password == password2)) {
    window.location.href = "home.html"
    alert("Cadastrado com sucesso!");
  }
  else {
    alert("As senhas devem ser iguais.");
  }

}

function voltarLogin(){
  window.location.href = "login.html"
}
