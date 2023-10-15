export default function Button({ children }) {
  return <button onClick={(e) => e.target.value}>{children}</button>;
}
