$(document).ready(function() {
    
    function adicionarTarefa() {
        
        var tarefa = $("#input-tarefa").val();
        
        if (tarefa) {
            
            var li = $("<li>").text(tarefa);
           
            $("#lista-tarefas").append(li);
            
            $("#input-tarefa").val("");
        }
    }

   
    $("#form-tarefa").submit(function(e) {
       
        e.preventDefault();
     
        adicionarTarefa();
    });

    
    $("#lista-tarefas").on("click", "li", function() {
        
        $(this).toggleClass("tachado");
    });
});

