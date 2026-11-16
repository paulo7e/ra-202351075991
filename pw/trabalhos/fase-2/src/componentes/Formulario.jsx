
import { useState } from "react";


function Formulario({ onCadastrar }) {
  const [nome, setNome] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [fonteDosDados, setFonteDosDados] = useState("");

  function cadastrar(evento) {
    evento.preventDefault();

    if (nome.trim().length < 3) {
      alert("O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    if (!especialidade.trim() || !tarefa.trim()) {
      alert("Preencha a especialidade e a tarefa.");
      return;
    }

    onCadastrar({
      nome,
      especialidade,
      tarefa,
      responsavel,
      fonteDosDados
    });

    setNome("");
    setEspecialidade("");
    setTarefa("");
    setResponsavel("");
    setFonteDosDados("");
  }

  return (
    <form className="formulario" onSubmit={cadastrar}>
      <h2>Cadastrar Agente Virtual</h2>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do agente"
      />

      <input
        value={especialidade}
        onChange={(e) => setEspecialidade(e.target.value)}
        placeholder="Especialidade"
      />

      <input
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Tarefa"
      />

      <input
        value={responsavel}
        onChange={(e) => setResponsavel(e.target.value)}
        placeholder="Responsável"
      />

      <input
        value={fonteDosDados}
        onChange={(e) => setFonteDosDados(e.target.value)}
        placeholder="Fonte dos Dados"
      />

      <button type="submit">Cadastrar Agente</button>
    </form>
  );
}

export default Formulario;
