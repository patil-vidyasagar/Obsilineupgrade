import React from 'react';
import {RoofHexagons,RoofNesting,RoofGrid} from '@/components/obsiline/concepts/RoofConcepts';

const CONCEPTS=[
 {C:RoofHexagons,title:'Interlocking Hexagons',desc:'2–3 hexagons pulse and lock together — one team.'},
 {C:RoofNesting,title:'Nesting Layers',desc:'Concentric squares fold inward one by one — architecture & depth.'},
 {C:RoofGrid,title:'Foundation Grid',desc:'A 3×3 grid lights cell by cell, then all glow — built united.'}
];

export default function RoofConcepts(){
 return (
  <div className="obsiline-site" style={{minHeight:'100vh',padding:'120px 24px 80px'}}>
   <div style={{maxWidth:1000,margin:'0 auto'}}>
    <span className="eyebrow">02 / ONE ROOF · ONE TEAM — CONCEPT REVIEW</span>
    <h2 style={{font:"500 clamp(34px,4vw,56px)/1.13 'Poppins'",letterSpacing:'-2px',margin:'18px 0 10px',color:'#f0f4f8'}}>Pick the <em>roof</em> visual.</h2>
    <p className="body-copy" style={{marginBottom:50}}>Three live animated options for the second metric icon. Each loops on its own — watch one full cycle before deciding.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {CONCEPTS.map(({C,title,desc})=>(
      <div key={title} style={{padding:'32px 24px',border:'1px solid #ffffff14',borderRadius:4,background:'linear-gradient(140deg,#ffffff04,#ffffff01)'}}>
       <div className="metric-ring" style={{marginBottom:22}}>
        <svg viewBox="0 0 180 180" aria-hidden="true"><circle className="ring-bg" cx="90" cy="90" r="79"/><circle className="ring-fill" cx="90" cy="90" r="79"/></svg>
        <span><C/></span>
        <small>02</small>
       </div>
       <h3 style={{font:"500 18px 'Poppins'",letterSpacing:'-.5px',margin:'0 0 8px',color:'#f0f4f8'}}>{title}</h3>
       <p style={{fontSize:11,color:'#94a5b9',lineHeight:1.7,margin:0}}>{desc}</p>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}