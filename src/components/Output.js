export default function Output({ output, onChangeOutput }) {
  return (
    <form>
      <input type="text" value={output}></input>
    </form>
  );
}
