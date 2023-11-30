import "./App.css";
import Story from "./Story";
import Post from "./Post";
import Sugestao from "./Sugestoes";

export default function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <RodaSugestoes />
    </div>
  );
}

function Stories() {
  return (
    <div className="stories">
      <Story />
    </div>
  );
}

function Posts() {
  return (
    <div className="posts">
      <Post />
    </div>
  );
}

function RodaSugestoes() {
  return (
    <div className="sidebar">
      <div class="usuario">
        <img src="img/catanacomics.svg" alt="img" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestao />
      </div>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
