import Card from "./Card";

function ListaCards({ agentes }) {
  return (
    <section className="lista-agentes">
      {agentes.map((agente) => (
        <Card key={agente.id} agente={agente} />
      ))}
    </section>
  );
}

export default ListaCards;


