import TarefaCard from "./TarefaCard";

function TarefaList({ tarefas, excluirTarefa, abrirEdicao }) {
    return (
        <div>
            {/*  percorre a lista de tarefas (tarefas.map)
                Para cada tarefa, cria um componente TarefaCard
                e dai renderiza um card para cada tarefa existente */}
            {tarefas.map((tarefa) => (
                <TarefaCard
                    key={tarefa.id}
                    tarefa={tarefa}
                    excluirTarefa={excluirTarefa}
                    abrirEdicao={abrirEdicao}
                />
            ))}
        </div>
    );
}

export default TarefaList;