export default function GameOver({ winner, onReset }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} wins!` : "Draw!"}</p>
      <p>
        <button onClick={onReset}>Play Again</button>
      </p>
    </div>
  );
}
