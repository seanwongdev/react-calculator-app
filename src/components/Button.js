export default function Button({ children, onClick, className, value }) {
  return (
    <button className={className} value={value} onClick={onClick}>
      {children}
    </button>
  );
}
