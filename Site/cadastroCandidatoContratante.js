function cadastroCandidatoContratante(){

    var nomeUsuario = document.getElementById('nomeUsuario').value
    var sobrenomeUsuario = document.getElementById('sobrenomeUsuario').value
    var telefone = document.getElementById('telefone').value
    var mail = document.getElementById('mail').value
    var opcao = document.getElementById('opcao').value
    var compara = new Boolean(true);
  
    if ((mail == '') || (nomeUsuario == '') || (sobrenomeUsuario == '') || (telefone == '') || (opcao == 'Escolha uma Opção')){
      alert("Nenhuma dos campos podem ficar sem preencher!");
      return false
    }else{
        window.location.href = "home.html"
    }
  }