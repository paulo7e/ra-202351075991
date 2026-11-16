import { useState } from "react";
import agentes from "./dados/agentes";
import Cabecalho from "./componentes/Cabecalho";
import ListaCards from "./componentes/ListaCards";
import Rodape from "./componentes/Rodape";

function App() {
  const [busca, setBusca] = useState("");

  const agentesFiltrados = agentes.filter((agente) =>
    agente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Cabecalho />

      <main className="conteudo">
        <h1 className="titulo-pagina">Agentes cadastrados</h1>

        <input
          type="text"
          placeholder="Buscar agente..."
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />

        <ListaCards agentes={agentesFiltrados} />
      </main>

      <Rodape />
    </>
  );
}

export default App;