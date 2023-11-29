import "./App.css";
import Story from "./Story";
import Post from "./Post";

export default function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
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
