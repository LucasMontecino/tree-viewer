import MenuList from "./menu-list";

/* eslint-disable react/prop-types */
export default function MenuItem({ item }) {
  return (
    <div className="list-item-container">
      <li key={item.label}>{item.label}</li>
      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </div>
  );
}
