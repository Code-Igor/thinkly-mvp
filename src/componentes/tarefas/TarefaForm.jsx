import { useState } from "react";

function TarefaForm({ adicionarTarefa }) {
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!titulo.trim()) {
            alert("O título é obrigatório.");
            return;
        }

        const novaTarefa = {
            id: Date.now(),
            titulo,
            descricao,
            metaConclusao,
            prioridade: "",
            status: "não iniciada",
            criadaEm: new Date().toISOString(),
        };

        adicionarTarefa(novaTarefa);

        setTitulo("");
        setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Título da tarefa"
            maxLength={60}
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
        />

        <textarea
            placeholder="Descrição da tarefa"
            maxLength={500}
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
        />

        <button type="submit">Criar tarefa</button>
    </form>
  );
}

export default TarefaForm;

