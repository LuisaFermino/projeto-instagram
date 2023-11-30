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

function RodaSidebar() {
  return (
    <div className="sidebar">
      <div className="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
