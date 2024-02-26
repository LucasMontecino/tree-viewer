/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-container">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
}
