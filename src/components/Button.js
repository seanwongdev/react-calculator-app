export default function Button({ children, setOutput }) {
  return (
    <button onClick={(e) => setOutput(e.target.innerText)}>{children}</button>
  );
}
