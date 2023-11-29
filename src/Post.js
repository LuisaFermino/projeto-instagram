import "./App.css";

export default function Post() {
  const usuarios = [
    {
      usuario: "img/meowed.svg",
      nome: "meowed",
      conteudo: "img/gato-telefone.svg",
    },
    { usuario: "img/barked.svg", nome: "barked", conteudo: "img/dog.svg" },
  ];

  return usuarios.map((usuario) => (
    <EstruturaPost
      usuario={usuario.usuario}
      nome={usuario.nome}
      conteudo={usuario.conteudo}
    />
  ));
}

function EstruturaPost(props) {
  const { usuario, nome, conteudo } = props;

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={usuario} alt="img" />
          {nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={conteudo} alt="img" />
      </div>
    </div>
  );
}
