import React from 'react';

export default function Button({ children, customClass, onClick, ...props }) {
  function handleClick(e) {
    return onClick?.(e);
  }

  return (
    <button className={`${customClass}`} {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
