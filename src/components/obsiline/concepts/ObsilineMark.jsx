import React from 'react';

/**
 * Stylized SVG reconstruction of the Obsiline mark: a broken (C-shaped) emerald
 * hexagon frame built from five faceted strips (each an inner/outer face pair for
 * a beveled 3D read) plus a gold upward arrow. Each facet group carries a class
 * (e1..e5) so concept animations can drive them independently. The real raster
 * mark is used elsewhere for whole-logo concepts; this is for piece-driven ones.
 */
export default function ObsilineMark({ id = 'obs', frame = true, arrow = true, className = '' }) {
  return (
    <svg className={`obsiline-mark ${className}`} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gold`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#AD8C4A" />
          <stop offset="1" stopColor="#C8A45F" />
        </linearGradient>
      </defs>
      {frame && (
        <g className="obs-frame">
          <g className="facet e1">
            <polygon className="f-inner" fill="#2c7a55" points="100,20 30.72,60 27.22,53.94 96.5,13.94" />
            <polygon className="f-outer" fill="#143d28" points="96.5,13.94 27.22,53.94 23.72,47.88 93,7.88" />
          </g>
          <g className="facet e2">
            <polygon className="f-inner" fill="#2c7a55" points="30.72,60 30.72,140 23.72,140 23.72,60" />
            <polygon className="f-outer" fill="#143d28" points="23.72,60 23.72,140 16.72,140 16.72,60" />
          </g>
          <g className="facet e3">
            <polygon className="f-inner" fill="#2c7a55" points="30.72,140 100,180 96.5,186.06 27.22,146.06" />
            <polygon className="f-outer" fill="#143d28" points="27.22,146.06 96.5,186.06 93,192.12 23.72,152.12" />
          </g>
          <g className="facet e4">
            <polygon className="f-inner" fill="#2c7a55" points="100,180 169.28,140 172.78,146.06 103.5,186.06" />
            <polygon className="f-outer" fill="#143d28" points="103.5,186.06 172.78,146.06 176.28,152.12 107,192.12" />
          </g>
          <g className="facet e5">
            <polygon className="f-inner" fill="#2c7a55" points="169.28,140 169.28,60 176.28,60 176.28,140" />
            <polygon className="f-outer" fill="#143d28" points="176.28,140 176.28,60 183.28,60 183.28,140" />
          </g>
        </g>
      )}
      {arrow && (
        <g className="obs-arrow">
          <polygon className="arrow-shaft" fill={`url(#${id}-gold)`} points="69.64,125.64 82.36,138.36 156.36,67.36 143.64,48.64" />
          <polygon className="arrow-head" fill={`url(#${id}-gold)`} points="138.69,46.69 165.56,42.44 161.31,69.31" />
          <line className="arrow-hi" x1="69.64" y1="125.64" x2="143.64" y2="48.64" stroke="#E8C973" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}