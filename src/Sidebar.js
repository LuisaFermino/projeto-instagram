import "./App.css";
import Sugestao from "./Sugestoes";

export default function Sidebar() {
  const itens = [
    { usuario: "img/catanacomics.svg", nome: "catanacomics", perfil: "Catana" },
  ];
  return itens.map((item) => (
    <EstruturaSidebar
      usuario={item.usuario}
      nome={item.nome}
      perfil={item.perfil}
    />
  ));
}

function EstruturaSidebar(props) {
  const { usuario, nome, perfil } = props;
  return (
    <div className="sidebar">
      <div className="usuario">
        <img src={usuario} alt="img" />
        <div className="texto">
          <strong>{nome}</strong>
          {perfil}
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestao />
      </div>
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
