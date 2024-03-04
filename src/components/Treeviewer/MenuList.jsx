import MenuItem from "./MenuItem";

export default function MenuList({ list }) {
  return (
    <ul className="list">
      {list &&
        list.length &&
        list.map((item) => <MenuItem key={item.label} item={item} />)}
    </ul>
  );
}
