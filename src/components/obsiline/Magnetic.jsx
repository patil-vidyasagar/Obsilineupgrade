import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
export default function Magnetic({href,children,gold=false,className=''}) {
 const ref=useRef(null);
 const move=e=>{if(!window.matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches)return;const r=e.currentTarget.getBoundingClientRect();ref.current.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.13}px,${(e.clientY-r.top-r.height/2)*.2}px)`;};
 return <a ref={ref} href={href} onPointerMove={move} onPointerLeave={()=>ref.current.style.transform=''} className={`magnetic ${gold?'gold-button':'outline-button'} ${className}`}>{children}<ArrowUpRight size={17}/></a>;
}