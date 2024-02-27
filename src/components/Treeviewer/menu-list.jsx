import MenuItem from "./menu-item";

export default function MenuList({ menus = [] }) {
  return (
    <ul className="list-container">
      {menus &&
        menus.length &&
        menus.map((item) => <MenuItem item={item} key={item.label} />)}
    </ul>
  );
}
