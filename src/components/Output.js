export default function Output({ output, onChangeOutput }) {
  return (
    <form>
      <input
        type="text"
        value={output}
        onChange={() => onChangeOutput(2)}
      ></input>
    </form>
  );
}
