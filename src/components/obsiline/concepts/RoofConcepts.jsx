import React from 'react';

// Concept 1 — Interlocking hexagons (signature motif) pulse and lock together.
export function RoofHexagons(){
 return (
  <svg viewBox="0 0 60 60" className="metric-icon-svg" aria-hidden="true">
   <polygon className="rc-hex rc-hex-a" points="39,22 34.5,29.8 25.5,29.8 21,22 25.5,14.2 34.5,14.2"/>
   <polygon className="rc-hex rc-hex-b" points="31.5,35 27,42.8 18,42.8 13.5,35 18,27.2 27,27.2"/>
   <polygon className="rc-hex rc-hex-c" points="46.5,35 42,42.8 33,42.8 28.5,35 33,27.2 42,27.2"/>
  </svg>
 );
}

// Concept 2 — Concentric squares fold inward one by one (architecture / depth).
export function RoofNesting(){
 return (
  <svg viewBox="0 0 60 60" className="metric-icon-svg" aria-hidden="true">
   <rect className="rc-sq rc-sq-1" x="8" y="8" width="44" height="44"/>
   <rect className="rc-sq rc-sq-2" x="16" y="16" width="28" height="28"/>
   <rect className="rc-sq rc-sq-3" x="24" y="24" width="12" height="12"/>
  </svg>
 );
}

// Concept 3 — 3×3 foundation grid lights cell by cell, then all glow together.
export function RoofGrid(){
 const cells=[];
 for(let r=0;r<3;r++){
  for(let c=0;c<3;c++){
   const n=r*3+c+1;
   cells.push(<rect key={n} className={`rc-cell rc-cell-${n}`} x={6+c*16} y={6+r*16} width="14" height="14" rx="1.5"/>);
  }
 }
 return <svg viewBox="0 0 60 60" className="metric-icon-svg" aria-hidden="true">{cells}</svg>;
}