import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Magnetic from '@/components/obsiline/Magnetic';
import GrowthPath from '@/components/obsiline/concepts/GrowthPath';
import DigitalEcosystem from '@/components/obsiline/concepts/DigitalEcosystem';
import PrecisionAssembly from '@/components/obsiline/concepts/PrecisionAssembly';
import DigitalArchitecture from '@/components/obsiline/concepts/DigitalArchitecture';

const CONCEPTS = [
  { key: 'growth', label: 'Growth Path', tag: 'BUILD → CONNECT → GROW', Component: GrowthPath, desc: 'A glowing gold point travels the arrow\'s path while the emerald frame assembles around it — then settles into a quiet, interactive idle.' },
  { key: 'ecosystem', label: 'Digital Ecosystem', tag: 'INTELLIGENT SYSTEMS', Component: DigitalEcosystem, desc: 'The mark is the core; Marketing, SEO, Software, Cloud, AI, ERP and IT orbit it, pulsing data inward through the gold arrow.' },
  { key: 'assembly', label: 'Precision Assembly', tag: 'ENGINEERED TO LOCK', Component: PrecisionAssembly, desc: 'Faceted emerald components rotate, slide and mechanically lock together; the gold arrow rises last into its final position.' },
  { key: 'architecture', label: 'Digital Architecture', tag: 'DEPTH & MOMENTUM', Component: DigitalArchitecture, desc: 'The flat mark extrudes into a layered 3D structure; the gold arrow becomes a luminous upward pathway with cinematic camera depth.' },
];

export default function HeroConcepts() {
  const [active, setActive] = useState(0);
  const c = CONCEPTS[active];
  const C = c.Component;
  return (
    <div className="obsiline-site">
      <style>{`
.concept-switcher{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:130;display:flex;align-items:center;gap:8px;padding:8px;border:1px solid #ffffff1a;border-radius:999px;background:#0b1221e0;backdrop-filter:blur(18px);box-shadow:0 12px 30px #0005;max-width:calc(100vw - 32px);overflow-x:auto}
.cs-label{font:9px/1 'JetBrains Mono',monospace;letter-spacing:1.5px;color:#c5b785;padding:0 10px;white-space:nowrap}
.cs-btn{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid transparent;border-radius:999px;background:transparent;color:#a5b2c2;font:500 11px/1 'Poppins',sans-serif;cursor:pointer;white-space:nowrap;transition:color .4s,border-color .4s,background .4s}
.cs-btn:hover{color:#f0d27a}
.cs-btn.is-active{color:#101725;background:#10b981;border-color:#10b981}
.cs-num{font:9px/1 'JetBrains Mono',monospace;letter-spacing:.5px;opacity:.7}
.concept-meta{padding:34px max(6vw,24px) 60px;display:flex;flex-direction:column;gap:14px;border-top:1px solid #ffffff0c;background:#0b1221}
.concept-meta .eyebrow{color:#c5b785}
.concept-meta p{font-size:14px;color:#9bacc1;line-height:1.9;max-width:680px;margin:0}
.concept-hint{font:9px/1.7 'JetBrains Mono',monospace;letter-spacing:1.4px;color:#7d929a}
@media(max-width:767px){.cs-label{display:none}.cs-btn{padding:8px 10px;font-size:10px}}
`}</style>
      <div className="concept-switcher" role="tablist" aria-label="Hero animation concepts">
        <span className="cs-label">HERO ANIMATION CONCEPTS</span>
        {CONCEPTS.map((co, i) => (
          <button
            key={co.key}
            role="tab"
            aria-selected={i === active}
            className={`cs-btn ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="cs-num">0{i + 1}</span>
            <span className="cs-name">{co.label}</span>
          </button>
        ))}
      </div>
      <section
        id="home"
        className="hero lighting"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mx', `${(e.clientX - r.left) / r.width * 100}%`);
          e.currentTarget.style.setProperty('--my', `${(e.clientY - r.top) / r.height * 100}%`);
        }}
      >
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="eyebrow hero-intro"><span className="live-dot" /> AN INDEPENDENT DIGITAL GROWTH STUDIO</div>
          <h1>
            <span className="hero-word" style={{ '--delay': '0ms' }}>Building</span><br />
            <span className="hero-word" style={{ '--delay': '100ms' }}>Intelligent</span><br />
            <span className="hero-word" style={{ '--delay': '200ms' }}>Digital <em>Growth.</em></span>
          </h1>
          <p className="hero-description">We combine digital marketing, software development and IT support under one roof — so your brand grows faster and runs smoother.</p>
          <div className="hero-actions">
            <Magnetic gold href="mailto:obsilinestudio@gmail.com?subject=Book%20a%20consultation">Book Consultation</Magnetic>
            <Magnetic href="#services">Explore Services</Magnetic>
          </div>
        </div>
        <div className="engine-stage"><C /></div>
        <div className="hero-bottom">
          <a href="#about" className="scroll-cue"><span><ArrowDown size={14} /></span> SCROLL TO DISCOVER</a>
          <p>STRATEGY. TECHNOLOGY. MOMENTUM.</p>
          <span className="hero-page">CONCEPT 0{active + 1} — 04</span>
        </div>
      </section>
      <div className="concept-meta">
        <span className="eyebrow"><span className="live-dot" /> {c.tag}</span>
        <p>{c.desc}</p>
        <span className="concept-hint">Move your cursor over the engine to feel the parallax. Hover the mark to intensify the glow. Each concept plays a short formation intro, then rests in an interactive idle.</span>
      </div>
    </div>
  );
}