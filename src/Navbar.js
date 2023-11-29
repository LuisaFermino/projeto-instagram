import "./App.css";

export default function Logo() {
  return (
    <div className="container">
      <div class="logo">
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="separador"></div>
        <img src="img/logo.png" />
      </div>
      <Pesquisa />
      <Icones />
    </div>
  );
}

function Pesquisa() {
  return (
    <div class="pesquisa">
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}

function Icones() {
  return (
    <div class="icones">
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}
