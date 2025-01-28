import React, { ReactNode } from "react";

export const Button = ({
    type,
    disabled,
    children,
    onClick,
    className,
  }: {
    type: "button" | "submit";
    disabled?: boolean;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
  }) => (
    <button
      className={`w-full bg-gradient-to-r from-[#029FAE] to-[#017F8E] text-white font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );        