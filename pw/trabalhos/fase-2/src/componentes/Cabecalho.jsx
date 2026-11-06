function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-interno">
        <span className="logo">Agentes Virtuais</span>

        <nav>
          <ul className="menu">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#agentes">Agentes</a></li>
            <li><a href="#cadastro">Cadastro</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
