// src/Badge.js
import React from "react";
import "./Badge.css"; // Import CSS for styling

const Badge = ({
  text,
  color = "gray",
  textColor = "white",
  size = "medium",
  rounded = false,
  animated = false,
}) => {
  const badgeClass = `badge badge-${size} ${rounded ? "badge-rounded" : ""} ${
    animated ? "badge-animated" : ""
  }`;

  return (
    <span
      className={badgeClass}
      style={{ backgroundColor: color, color: textColor }}
    >
      {text}
    </span>
  );
};

export default Badge;
