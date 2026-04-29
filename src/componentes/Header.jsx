function Header() {
  return (
    // titulo a esquerda e links a direita
    <header className="header">
      <h2> THINKLY </h2>
      <nav>
        <a href="/">TAREFAS</a>
        <a href="/anotacoes">ANOTAÇÕES</a>
      </nav>
    </header>
  );
}

export default Header;