import MenuList from "./MenuList";
import "./styles.css";

export default function TreeViewer({ data }) {
  return (
    <div className="main-container">
      <div className="list-container">
        <MenuList list={data} />
      </div>
    </div>
  );
}
