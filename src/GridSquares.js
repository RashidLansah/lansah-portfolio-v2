import React from 'react';

const CELL = 72;

// Grid coordinates (col, row) chosen to hug the edges, away from centered content
const LIT_CELLS = [
  [1, 1], [3, 4], [2, 6], [6, 0], [9, 1], [12, 6],
  [15, 5], [16, 2], [17, 0], [18, 4],
];

function GridSquares() {
  return (
    <div
      aria-hidden="true"
      className="grid-squares-bg"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(27,27,26,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,27,26,0.05) 1px, transparent 1px)',
        backgroundSize: `${CELL}px ${CELL}px`,
      }}
    >
      {LIT_CELLS.map(([c, r], i) => (
        <div
          key={`${c}-${r}`}
          className="grid-squares-cell"
          style={{
            left: c * CELL + 1,
            top: r * CELL + 1,
            width: CELL - 1,
            height: CELL - 1,
            animationDelay: `${-i * 1.7}s`,
          }}
        />
      ))}
    </div>
  );
}

export default GridSquares;
