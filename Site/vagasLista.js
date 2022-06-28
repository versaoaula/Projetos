
var vagas = [
    { "Id": "1", "Título da vaga": "Suporte à sistemas", "Contratante": "Senai", "Requisitos": "1 ano de experiência", "Interesses": "Estudo", "Beneficios": "Bolsa de estudos"}
  ];

function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(vagas, selector);

  for (var i = 0; i < vagas.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = vagas[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}

function addAllColumnHeaders(vagas, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < vagas.length; i++) {
    var rowHash = vagas[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}