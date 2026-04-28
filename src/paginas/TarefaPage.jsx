import TarefaForm from "../componentes/tarefas/TarefaForm.jsx";
import TarefaList from "../componentes/tarefas/TarefaList.jsx";
import { useState } from "react";

function TarefaPage() {

    // lista de tarefas
    // comeca vazia e dpois adiciona novas tarefas 
    const [tarefas, setTarefas] = useState([]);
    // estado para o model
    const [modalAberto, setModalAberto] = useState(false);
    // estado de edicao
    const [tarefaEmEdicao, setTarefaEmEdicao] = useState(null);

    function adicionarTarefa(novaTarefa) {
        setTarefas([...tarefas, novaTarefa]);
        alert("Tarefa adicionada com sucesso!");
    }

    function excluirTarefa(id) {
        const confirmou = window.confirm("Deseja realmente excluir esta tarefa?");
        if (!confirmou) return;

        // acha a tarefa exato pelo id
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

    // para editar
    function editarTarefa(tarefaEditada) {

        // passa pela lista de tarefas
        // encontra a tarefa editada e a substitui pela antiga
        const tarefasAtualizadas = tarefas.map((tarefa) => {
            if (tarefa.id === tarefaEditada.id) {
                return tarefaEditada;
            }

            return tarefa;
        });

        // atualiza o estado da lista de tarefas
        // renderizar a lista com a tarefa editada
        setTarefas(tarefasAtualizadas);
        //limpa tarefa
        setTarefaEmEdicao(null);
        // fecha o modal de edição
        setModalAberto(false);
        
        alert("Tarefa editada com sucesso!");
    }

    // entra no estado de edicao
    function abrirEdicao(tarefa) {
        setTarefaEmEdicao(tarefa);
        setModalAberto(true);
    }

    return (
        <div>
            <div>
                <h1> TAREFAS </h1>
                <p> Administre as suas tarefas aqui!</p>
            </div>

            <div>
                <button className="btn-abrir-form" onClick={() => setModalAberto(true)}>Nova Tarefa</button>

                {/* adicionando um pop-up para criacao do formulario (achei melhor assim) */}
                {modalAberto && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button className="btn-fechar" onClick={() => setModalAberto(false)}>Fechar</button>

                            <TarefaForm adicionarTarefa={adicionarTarefa}
                                editarTarefa={editarTarefa}
                                tarefaEmEdicao={tarefaEmEdicao} />
                        </div>
                    </div>
                )}
            </div>

            <div>
                <h2> LISTA DE TAREFAS </h2>

                <div className="listaTarefas">
                    <TarefaList tarefas={tarefas} excluirTarefa={excluirTarefa} abrirEdicao={abrirEdicao} />
                </div>

            </div>
        </div>
    );
}

export default TarefaPage;
