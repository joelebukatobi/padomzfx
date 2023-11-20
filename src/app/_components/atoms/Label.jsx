import React from 'react';

export const Label = ({ children, className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};
