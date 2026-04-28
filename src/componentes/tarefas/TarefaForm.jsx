import { useState } from "react";

function TarefaForm({ adicionarTarefa }) {

    // estados (valor padrao) 
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [metaConclusao, setMetaConclusao] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [status, setStatus] = useState("não iniciada");

    function handleSubmit(event) {
        event.preventDefault();

        // obriga a colocar o titulo
        if (!titulo.trim()) {
            alert("O título é obrigatório.");
            return;
        }

        if (metaConclusao) {
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);

            const dataInformada = new Date(metaConclusao);

            // confirmando que o usuario nao coloque uma data no "passado"
            if (dataInformada < hoje) {
                alert("A meta de conclusão não pode ser anterior ao dia de hoje.");
                return;
            }
        }

        // todos os campos de uma tarefa
        const novaTarefa = {
            id: Date.now(),
            titulo,
            descricao,
            metaConclusao,
            prioridade,
            status,
            criadaEm: new Date().toISOString(),
        };

        adicionarTarefa(novaTarefa);
        

        // resetando o estado
        setTitulo("");
        setDescricao("");
        setMetaConclusao("");
        setPrioridade("");
        setStatus("não iniciada");
  }

  return (
    // formulario em si, com todos os campos
    <form onSubmit={handleSubmit}>
        <h2>Criar tarefa</h2>

        <input
            type="text"
            placeholder="Título"
            maxLength={60}
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
        />

        <textarea
            placeholder="Descrição"
            maxLength={500}
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
        />

        <input
            type="date"
            value={metaConclusao}
            onChange={(event) => setMetaConclusao(event.target.value)}
        />

        <select
            value={prioridade}
            onChange={(event) => setPrioridade(event.target.value)}
        >
            <option value="">Sem prioridade</option>
            <option value="critica">Crítica</option>
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
        </select>

        <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
        >
            <option value="nao iniciada">Não iniciada</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluida">Concluída</option>
        </select>

        <button type="submit">Salvar tarefa</button>
    </form>
  );
}

export default TarefaForm;