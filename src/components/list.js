import React from "react";

export default function List({ title, items, classNames }) {
  if ((items || []).length === 0) return "";

  return (
    <div className={classNames}>
      <h5>{title}</h5>
      <ul className="list-unstyled text-muted mb-0">
        {items.map((item, i) => {
          const key = item.replace(/\s+/g, "-").toLowerCase();
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
