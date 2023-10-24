export default function Button({ children, customClass, ...props }) {
  function handleClick(e) {
    const { onClick } = props;
    return onClick?.(e);
  }

  return (
    <button className={`${customClass}`} {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
