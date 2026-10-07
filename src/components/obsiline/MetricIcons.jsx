import React from 'react';

export function MetricArrow(){
 return (
  <svg viewBox="0 0 60 60" className="metric-icon-svg" aria-hidden="true">
   <path className="shaft" d="M16 16 L44 44"/>
   <polyline className="head" points="34,44 44,44 44,34"/>
  </svg>
 );
}

export function MetricRoof(){
 return (
  <svg viewBox="0 0 60 60" className="metric-icon-svg" aria-hidden="true">
   <polygon className="rc-hex rc-hex-a" points="39,22 34.5,29.8 25.5,29.8 21,22 25.5,14.2 34.5,14.2"/>
   <polygon className="rc-hex rc-hex-b" points="31.5,35 27,42.8 18,42.8 13.5,35 18,27.2 27,27.2"/>
   <polygon className="rc-hex rc-hex-c" points="46.5,35 42,42.8 33,42.8 28.5,35 33,27.2 42,27.2"/>
  </svg>
 );
}

export function MetricClock(){
 const ticks=[];
 for(let i=0;i<24;i++){
  const a=i*15*Math.PI/180;
  const major=i%6===0;
  const r1=major?17:21, r2=24;
  ticks.push(<line key={i} className={`mi-tick${major?' mi-tick-major':''}`} x1={30+r1*Math.sin(a)} y1={30-r1*Math.cos(a)} x2={30+r2*Math.sin(a)} y2={30-r2*Math.cos(a)}/>);
 }
 return (
  <svg viewBox="0 0 60 60" className="metric-icon-svg" aria-hidden="true">
   <circle className="mi-clock-face" cx="30" cy="30" r="24"/>
   {ticks}
   <line className="mi-hand" x1="30" y1="30" x2="30" y2="11">
    <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="8s" repeatCount="indefinite"/>
   </line>
   <circle className="mi-center" cx="30" cy="30" r="2"/>
  </svg>
 );
}