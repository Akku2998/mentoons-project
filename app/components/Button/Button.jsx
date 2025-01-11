import React from "react";

export const Button = ({ label, type = "button", className = "", Icon }) => {
  return (
    <button
      type={type}
      value={label}
      className={`flex items-center space-x-2 px-4 text-primary border ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
    </button>
  );
};
