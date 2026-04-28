import TarefaCard from "./TarefaCard";

function TarefaList({ tarefas, excluirTarefa }) {
    return (
        <div>
            {/*  percorre a lista de tarefas (tarefas.map)
                Para cada tarefa, cria um componente TaskCard
                e dai renderiza um card para cada tarefa existente */}
            {tarefas.map((tarefa) => (
                <TaskCard
                    key={tarefa.id}
                    tarefa={tarefa}
                    excluirTarefa={excluirTarefa}
                />
            ))}
        </div>
    );
}

export default TarefaList;