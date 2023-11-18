import React from 'react';

export const TextArea = ({ children, className, name, id, placeholder, value, required }) => {
  return (
    <textarea required={required} value={value} id={id} name={name} placeholder={placeholder} className={className}>
      {children}
    </textarea>
  );
};
