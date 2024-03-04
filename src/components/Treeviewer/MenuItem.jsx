import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  return (
    <div>
      <li>{item.label}</li>

      {item && item.children && item.children.length ? (
        <MenuList list={item.children} />
      ) : null}
    </div>
  );
}
