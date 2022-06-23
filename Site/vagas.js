
  function addVaga() {

    var id = Date.now();
    var titulo = $('#FormTitulo').val();
    var contratante = $('#FormContratante').val();
    var requisitos = $('#FormRequisitos').val();
    var interesses = $('#FormInteresses').val();
    var beneficios = $('#FormBeneficios').val();

    objetoJason={
        "Id": "",
        "Titulo": "",
        "Contratante": "",
        "Requisitos": "",
        "Interesses": "",
        "Beneficios": ""
      }

      objetoJason.Id=id;
      objetoJason.Titulo=titulo;
      objetoJason.Contratante=contratante;
      objetoJason.Requisitos=requisitos;
      objetoJason.Interesses=interesses;
      objetoJason.Beneficios=beneficios;

      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(arqJson, null, 2)], {
        type: "text/plain"
      }));
      a.setAttribute("download", "vagas.json");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

  }