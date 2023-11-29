import "./App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <Pesquisa />
        <Icones />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <ion-icon name="logo-instagram"></ion-icon>
      <div className="separador"></div>
      <img src="img/logo.png" alt="logo" />
    </div>
  );
}

function Pesquisa() {
  return (
    <div className="pesquisa">
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
