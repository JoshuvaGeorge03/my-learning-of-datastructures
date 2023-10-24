export default function TextBox({ customClass, type = "text", ...props }) {
  return <input type={type} className={`${customClass}`} {...props} />;
}
