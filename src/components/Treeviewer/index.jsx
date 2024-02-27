import MenuList from "./menu-list";
import "./styles.css";

export default function TreeViewer({ menu = [] }) {
  return (
    <div className="tree-viewer-container">
      <MenuList menus={menu} />
    </div>
  );
}
