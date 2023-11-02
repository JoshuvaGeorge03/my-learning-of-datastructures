import React from 'react';

export default function TextBox({ customClass, type = "text", onChange, value,  ...props }) {
  
  function handleChange(e) {
    onChange?.(e.target.value);
  }

  return <input data-testid="todoListInput" onChange={handleChange} value={value} type={type} className={`${customClass}`} {...props} />;
}
