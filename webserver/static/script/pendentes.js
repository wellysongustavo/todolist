
$( document ).ready(function() {
   $.getJSON("tarefas_pendentes.json", function(data) {
      //Aqui você manipula os dados e pode percorrer e jogar no HTML 
      //da forma que achar mais adequada.
        console.log(data); 
    });
});