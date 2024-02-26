import MenuItem from "./menu-item";

export default function MenuList({ data }) {
  return (
    <ul className="list-container">
      <MenuItem data={data} />
    </ul>
  );
}
