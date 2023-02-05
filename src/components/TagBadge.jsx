import React from "react";
import Icon from "./Icon";

export default function TagBadge({ icon, text, handleRemove }) {
  return (
    <span
      id="badge-dismiss-default"
      class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-green-800 bg-green-200 rounded"
    >
      <div className="mr-2">
        <Icon name={icon || "search"} color={"text-green-400"} />
      </div>
      {text}
      <button
        type="button"
        class="inline-flex items-center p-0.5 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
        data-dismiss-target="#badge-dismiss-default"
        aria-label="Remove"
        onClick={handleRemove}
      >
        <svg
          aria-hidden="true"
          class="w-3.5 h-3.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Remove badge</span>
      </button>
    </span>
  );
}
