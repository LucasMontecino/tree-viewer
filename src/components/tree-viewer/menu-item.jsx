import { useState } from "react";

export default function MenuItem({ data }) {
  const [showNested, setShowNested] = useState({});

  function toggleNested(name) {
    setShowNested({ ...showNested, [name]: !showNested[name] });
  }

  return (
    <div className="list-item-container">
      {data.map((item) => {
        return (
          <li key={item.name} className="list-item">
            {item.isFolder && (
              <button onClick={() => toggleNested(item.name)}>
                {item.name}
              </button>
            )}
            {!item.isFolder && <span>{item.name}</span>}
            <div style={{ display: !showNested[item.name] && "none" }}>
              {item.children && <MenuItem data={item.children} />}
            </div>
          </li>
        );
      })}
    </div>
  );
}
