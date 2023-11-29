import "./App.css";

export default function Story() {
  const pessoas = [
    { imagem: "img/9gag.svg", usuario: "9gag" },
    { imagem: "img/meowed.svg", usuario: "meowed" },
    { imagem: "img/barked.svg", usuario: "barked" },
    {
      imagem: "img/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { imagem: "img/wawawicomics.svg", usuario: "wawawicomics" },
    { imagem: "img/respondeai.svg", usuario: "respondeai" },
    { imagem: "img/filomoderna.svg", usuario: "filomoderna" },
    { imagem: "img/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];

  return pessoas.map((pessoa) => (
    <UsuarioStory imagem={pessoa.imagem} usuario={pessoa.usuario} />
  ));
}

function UsuarioStory(props) {
  const { imagem, usuario } = props;

  return (
    <div className="story">
      <div className="imagem">
        <img src={imagem} alt="img" />
      </div>
      <div className="usuario">{usuario}</div>
    </div>
  );
}
