function TarefaCard({ tarefa, excluirTarefa }) {
    return (
        // usando article somente para ser menos generico (do que uma div)
        <article>
            <h2>{tarefa.titulo}</h2>
            <p>{tarefa.descricao || "Sem descrição"}</p>
            <p>{tarefa.metaConclusao || "Sem data"}</p>
            <p>Prioridade: {tarefa.prioridade || "Sem prioridade"}</p>
            <p>Status: {tarefa.status || "Sem prioridade"}</p>

            <button onClick={() => excluirTarefa(tarefa.id)}>
                Excluir
            </button>
        </article>
    );
}

export default TarefaCard;