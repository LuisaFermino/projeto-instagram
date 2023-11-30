import "./App.css";
import AcoesPost from "./AcoesPost";

export default function Post() {
  const usuarios = [
    {
      perfil: "img/meowed.svg",
      nome: "meowed",
      conteudo: "img/gato-telefone.svg",
      curtidas: "img/respondeai.svg",
      texto: "Curtido por respondeai e outras 101.523 pessoas",
    },
    {
      perfil: "img/barked.svg",
      nome: "barked",
      conteudo: "img/dog.svg",
      curtidas: "img/adorable_animals.svg",
      texto: " Curtido por adorable_animals e outras 99.159 pessoas",
    },
  ];

  return usuarios.map((usuario) => (
    <EstruturaPost
      perfil={usuario.perfil}
      nome={usuario.nome}
      conteudo={usuario.conteudo}
      curtidas={usuario.curtidas}
      texto={usuario.texto}
    />
  ));
}

function EstruturaPost(props) {
  const { perfil, nome, conteudo, curtidas, texto } = props;

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={perfil} alt="img" />
          {nome}
        </div>
        <Acoes />
      </div>
      <div className="conteudo">
        <img src={conteudo} alt="img" />
      </div>
      <div className="fundo">
        <AcoesPost />
        <div className="curtidas">
          <img src={curtidas} alt="img" />
          <div className="texto">{texto}</div>
        </div>
      </div>
    </div>
  );
}

function Acoes() {
  return (
    <div className="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  );
}
