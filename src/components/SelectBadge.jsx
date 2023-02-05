import React from "react";
import Icon from "./Icon";

export default function SelectBadge({ icon, active, text, handleClick }) {
  const activeClass = active
    ? "bg-blue-100 cursor-pointer text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-2 rounded-xl border-blue-400 mr-2"
    : "bg-gray-300 cursor-pointer text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-2 rounded-xl mr-2";
  return (
    <span class={activeClass} onClick={handleClick}>
      <div className="mr-2">
        <Icon name={icon} color={active ? "text-blue-800" : "text-gray-800"} />
      </div>
      {text}
    </span>
  );
}
