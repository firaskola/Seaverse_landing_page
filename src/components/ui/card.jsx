// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};