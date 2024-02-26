/* eslint-disable react/prop-types */
import MenuList from "./menu-list";
import "./styles.css";

export default function TreeViewer({ data = [] }) {
  return (
    <div className="main-container">
      <MenuList list={data} />
    </div>
  );
}
