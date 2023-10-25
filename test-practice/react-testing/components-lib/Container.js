import React from 'react';

export default function Container({ customClass, children, ...props }) {
  return (
    <div className={`${customClass}`} {...props}>
      {children}
    </div>
  );
}
