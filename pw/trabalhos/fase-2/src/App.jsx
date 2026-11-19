import { useState } from "react";
import agentes from "./dados/agentes";
import Cabecalho from "./componentes/Cabecalho";
import ListaCards from "./componentes/ListaCards";
import Rodape from "./componentes/Rodape";
import Formulario from "./componentes/Formulario";



function App() {
  const [agentesCadastrados, setAgentesCadastrados] = useState(agentes);

  const [busca, setBusca] = useState("");

  const agentesFiltrados = agentesCadastrados.filter((agente) =>
    agente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function cadastrarAgente(novoAgente) {
  const agenteComId = {
    ...novoAgente,
    id: Date.now()
  };

  setAgentesCadastrados((listaAtual) => [
    ...listaAtual,
    agenteComId
  ]);
}

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
        <Formulario onCadastrar={cadastrarAgente} />
        <ListaCards agentes={agentesFiltrados} />
      </main>

      <Rodape />
    </>
  );
}

export default App;