import "./App.css";
import Story from "./Story";
import Post from "./Post";
import Sidebar from "./Sidebar";

export default function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <RodaSidebar />
      <FundoMobile />
    </div>
  );
}

function Stories() {
  return (
    <div className="stories">
      <Story />
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
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

function RodaSidebar() {
  return <Sidebar />;
}

function FundoMobile() {
  return (
    <div class="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}
