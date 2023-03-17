import { useState } from "react";

export const Alert = ({ type, children, heading, closable, onClose }) => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        ></span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            X
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
};
