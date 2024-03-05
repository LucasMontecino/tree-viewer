import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [displayCurrentLabel, setDisplayCurrentLabel] = useState({});

  function handleDisplay(getCurrentLabel) {
    setDisplayCurrentLabel({
      ...displayCurrentLabel,
      [getCurrentLabel]: !displayCurrentLabel[getCurrentLabel],
    });
  }

  console.log(displayCurrentLabel);

  return (
    <div>
      <li className="item" onClick={() => handleDisplay(item.label)}>
        {item.label}
        {item.children ? (
          !displayCurrentLabel[item.label] ? (
            <span className="simbol">+</span>
          ) : (
            <span className="simbol">-</span>
          )
        ) : null}
      </li>

      {displayCurrentLabel[item.label]
        ? item &&
          item.children &&
          item.children.length > 0 && <MenuList list={item.children} />
        : null}
    </div>
  );
}
