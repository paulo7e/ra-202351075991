import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>Cadastro de Agentes Virtuais</h1>
        <nav>
          <a href="/">Início</a>
          <a href="/agentes.html">Agentes</a>
          <a href="/cadastro.html">Cadastrar agente</a>
        </nav>
      </header>

      <section>
        <h2>Bem-vindo ao sistema de agentes virtuais</h2>
        <p>
          Organize e consulte os agentes virtuais da equipe em um só lugar.
        </p>
        <a href="/agentes.html">Consultar agentes</a>
        {' · '}
        <a href="/cadastro.html">Cadastrar novo agente</a>
      </section>

      <footer>
        <p>Projeto acadêmico — Ciência da Computação</p>
      </footer>
    </main>
  )
}

export default App
