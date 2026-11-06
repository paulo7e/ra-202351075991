function Card({ agente }) {
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
        <span className="rotulo">Matrícula:</span>{" "}
        {agente.matricula}
      </p>
    </article>
  );
}

export default Card;

