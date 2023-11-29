import "./App.css";
import Story from "./Story";

export default function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories">
          <Story />
        </div>
        <div className="post"></div>
      </div>
    </div>
  );
}
