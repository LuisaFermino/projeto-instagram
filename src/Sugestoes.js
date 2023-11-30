import "./App.css";

export default function Sugestao() {
  const sugestoes = [
    {
      usuario: "img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      usuario: "img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      usuario: "img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      usuario: "img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      usuario: "img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return sugestoes.map((sugestao) => (
    <EstruturaSugestao
      usuario={sugestao.usuario}
      nome={sugestao.nome}
      razao={sugestao.razao}
    />
  ));
}

function EstruturaSugestao(props) {
  const { usuario, nome, razao } = props;

  return (
    <div className="sugestoes">
      <div className="sugestao">
        <div className="usuario">
          <img src={usuario} alt="img" />
          <div className="texto">
            <div className="nome">{nome}</div>
            <div className="razao">{razao}</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    </div>
  );
}
