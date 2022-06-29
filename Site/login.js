
  
function Login(){

  const usuario = [
  {"usuario": "Renata",
   "senha": "12345678"
  },
 {
  "usuario": "Ana" ,
  "senha": "87654321"
 }]
  var username = document.getElementById('name').value
  var password = document.getElementById('password').value

 for (let i=0; i<=1; i++)  {
	if ((username == usuario[i].usuario) && (password == usuario[i].senha)) { 
    window.location.href = "cadastro.html"
  break;
  }
  else {
    alert("Senha ou Usuário inválido.");
    break;
  }
  }
}


 






