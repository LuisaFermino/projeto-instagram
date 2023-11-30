import "./App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Logo />
        <IconeLogoMobile />
        <LogoMobile />
        <Pesquisa />
        <Icones />
        <IconeMobile />
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

function IconeLogoMobile() {
  return (
    <div class="logo-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
    </div>
  );
}

function LogoMobile() {
  return (
    <div class="instagram-mobile">
      <img src="img/logo.png" alt="img" />
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
    <div className="icones">
      <ion-icon name="paper-plane-outline"></ion-icon>
      <ion-icon name="compass-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}

function IconeMobile() {
  return (
    <div class="icones-mobile">
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
  );
}
