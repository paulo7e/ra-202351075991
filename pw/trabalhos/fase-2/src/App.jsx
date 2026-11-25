
import { useState } from "react";
import agentes from "./dados/agentes";
import Cabecalho from "./componentes/Cabecalho";
import ListaCards from "./componentes/ListaCards";
import Rodape from "./componentes/Rodape";
import Formulario from "./componentes/Formulario";

function App() {
  const [agentesCadastrados, setAgentesCadastrados] = useState(
    agentes.map((agente) => ({
      ...agente,
      curtidas: 0,
      curtiu: false
    }))
  );

  const [busca, setBusca] = useState("");

  const agentesFiltrados = agentesCadastrados.filter((agente) =>
    agente.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function cadastrarAgente(novoAgente) {
    const agenteComId = {
      ...novoAgente,
      id: Date.now(),
      curtidas: 0,
      curtiu: false
    };

    setAgentesCadastrados((listaAtual) => [
      ...listaAtual,
      agenteComId
    ]);
  }

  function curtirAgente(id) {
    setAgentesCadastrados((listaAtual) =>
      listaAtual.map((agente) => {
        if (agente.id === id) {
          return {
            ...agente,
            curtiu: !agente.curtiu,
            curtidas: agente.curtiu
              ? agente.curtidas - 1
              : agente.curtidas + 1
          };
        }

        return agente;
      })
    );
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

        <ListaCards
          agentes={agentesFiltrados}
          onCurtir={curtirAgente}
        />
      </main>

      <Rodape />
    </>
  );
}

export default App;
