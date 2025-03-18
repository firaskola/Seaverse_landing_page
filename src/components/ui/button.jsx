// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, className, variant, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};