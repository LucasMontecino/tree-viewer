import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleDisplay(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);
  return (
    <li className="list-item">
      <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleDisplay(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus size={20} color={"#fff"} />
            ) : (
              <FaPlus size={20} color={"#fff"} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList menus={item.children} />
      ) : null}
    </li>
  );
}
