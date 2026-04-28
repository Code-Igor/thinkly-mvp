import TarefaForm from "../componentes/tarefas/TarefaForm.jsx";
import { useState } from "react";

function TarefaPage() {

    //
    const [modalAberto, setModalAberto] = useState(false);

    function adicionarTarefa(novaTarefa) {
        alert("Tarefa adicionada com sucesso!");
    }

    return (
        <div>
            <div>
                <h1> TAREFAS </h1>
                <p> Administre as suas tarefas aqui!</p>

                <button className="btn-abrir-form" onClick={() => setModalAberto(true)}>Nova Tarefa</button>
            </div>

            {/* adicionando um pop-up para criacao do formulario (achei melhor assim) */}
            {modalAberto && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="btn-fechar" onClick={() => setModalAberto(false)}>Fechar</button>

                        <TarefaForm adicionarTarefa={adicionarTarefa}/>
                    </div>
                </div>
            )}

            
        </div>
    );
}

export default TarefaPage;
