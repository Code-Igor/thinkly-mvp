import TarefaForm from "../componentes/tarefas/TarefaForm.jsx"

function TarefaPage() {
    return (
        <div>
            <div> 
                <h1> TAREFAS </h1>
                <p> Administre as suas tarefas aqui!</p>
            </div> 
                <TarefaForm adicionarTarefa={adicionarTarefa} />

            <div>

            </div>
        </div>

    );
}

export default TarefaPage;