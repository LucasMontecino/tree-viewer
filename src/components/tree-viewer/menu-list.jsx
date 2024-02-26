import MenuItem from "./menu-item";

// eslint-disable-next-line react/prop-types
export default function MenuList({ data }) {
  return (
    <ul className="list-container">
      <MenuItem data={data} />
    </ul>
  );
}
