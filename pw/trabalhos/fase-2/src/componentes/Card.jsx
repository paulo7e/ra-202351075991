
function Card({ agente, onCurtir }) {
  return (
    <article className="card">
      <h3>{agente.nome}</h3>

      <p>
        <span className="rotulo">Especialidade:</span>{" "}
        {agente.especialidade}
      </p>

      <p>
        <span className="rotulo">Tarefa:</span>{" "}
        {agente.tarefa}
      </p>

      <p>
        <span className="rotulo">Responsável:</span>{" "}
        {agente.responsavel}
      </p>

      <p>
        <span className="rotulo">Fonte dos Dados:</span>{" "}
        {agente.fonteDosDados}
      </p>

      <button onClick={() => onCurtir(agente.id)}>
        {agente.curtiu ? "Descurtir" : "Curtir"} ❤️
      </button>

      <p>Curtidas: {agente.curtidas}</p>
    </article>
  );
}

export default Card;
