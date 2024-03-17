export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li
            key={`${turn.square.row}${turn.square.col}`}
          >{`Player ${turn.player} played column ${turn.square.col}, row ${turn.square.row}`}</li>
        );
      })}
    </ol>
  );
}
