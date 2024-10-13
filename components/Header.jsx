import Teste from "./teste";

const Header = () => {
  return (
    <header className="w-full fixed top-0 shadow-lg bg-white py-4 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-black font-bold text-xl">KERO</div>
        <ul className="flex space-x-4">
          <Teste texto="Inicio" link="/" />
          <Teste texto="Projetos" link="/projetos" />
          <Teste texto="Pacotes" link="/pacotes" />
          <Teste texto="Sobre" link="/Sobre" /> {/* Aqui você passa o link correto */}
        </ul>
        <a href="#contato" className="text-white bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
