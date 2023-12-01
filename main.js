$(document).ready(function() {
    // Função para adicionar uma tarefa na lista
    function adicionarTarefa() {
        // Pegar o valor do input
        var tarefa = $("#input-tarefa").val();
        // Verificar se o input não está vazio
        if (tarefa) {
            // Criar um elemento <li> com o texto da tarefa
            var li = $("<li>").text(tarefa);
            // Adicionar o elemento <li> na lista ordenada
            $("#lista-tarefas").append(li);
            // Limpar o input
            $("#input-tarefa").val("");
        }
    }

    // Evento de submit do formulário
    $("#form-tarefa").submit(function(e) {
        // Evitar o comportamento padrão do formulário (recarregar a página)
        e.preventDefault();
        // Chamar a função de adicionar tarefa
        adicionarTarefa();
    });

    // Evento de click nos itens da lista
    $("#lista-tarefas").on("click", "li", function() {
        // Alternar a classe tachado no elemento clicado
        $(this).toggleClass("tachado");
    });
});

