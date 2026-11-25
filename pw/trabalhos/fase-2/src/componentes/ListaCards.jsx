
import Card from "./Card";

function ListaCards({ agentes, onCurtir }) {
  return (
    <section className="lista-agentes">
      {agentes.map((agente) => (
        <Card
          key={agente.id}
          agente={agente}
          onCurtir={onCurtir}
        />
      ))}
    </section>
  );
}

export default ListaCards;



