import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border text-sm transition whitespace-nowrap ${
        active ? "bg-gray-900 text-white border-gray-900" : "hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
