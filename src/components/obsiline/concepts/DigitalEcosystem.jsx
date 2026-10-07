import React from 'react';
import { Image } from '@/components/ui/image';
import { MARK } from '@/components/obsiline/Brand';
import { useParallax } from './useParallax';

const NODES = [
  { label: 'Marketing', x: 50, y: 8 },
  { label: 'SEO', x: 88, y: 22 },
  { label: 'Software', x: 92, y: 62 },
  { label: 'Cloud', x: 66, y: 88 },
  { label: 'AI', x: 20, y: 84 },
  { label: 'ERP', x: 6, y: 50 },
  { label: 'IT', x: 12, y: 16 },
];

export default function DigitalEcosystem() {
  const stage = useParallax({ rotate: 7, translate: 22 });
  return (
    <div className="ec-stage" ref={stage}>
      <style>{`
.ec-stage{position:relative;width:100%;height:100%;display:grid;place-items:center;overflow:hidden}
.ec-grid{position:absolute;inset:0;background-image:linear-gradient(#10b9810a 1px,transparent 1px),linear-gradient(90deg,#10b9810a 1px,transparent 1px);background-size:42px 42px;mask-image:radial-gradient(ellipse at center,#000,transparent 75%);-webkit-mask-image:radial-gradient(ellipse at center,#000,transparent 75%)}
.ec-lines{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.ec-lines line{stroke:#10b98140;stroke-width:.4;stroke-dasharray:1.4 2.2}
.ec-pulse{fill:#f0d27a;filter:drop-shadow(0 0 3px #f0d27a)}
.ec-pulse.g{fill:#10b981;filter:drop-shadow(0 0 3px #10b981)}
.ec-core-wrap{position:relative;width:170px;height:170px;transform-style:preserve-3d}
.ec-core{width:100%;height:100%;animation:ec-float 6s ease-in-out infinite;filter:drop-shadow(0 0 22px #10b98155)}
.ec-core:hover{filter:drop-shadow(0 0 34px #10b981aa)}
.ec-node-pos{position:absolute;transform:translate(-50%,-50%)}
.ec-node{display:flex;align-items:center;gap:7px;padding:7px 11px;border:1px solid #10b9813a;background:#0c1a22e0;border-radius:999px;backdrop-filter:blur(8px);box-shadow:0 8px 20px #0003;white-space:nowrap;font:9px/1 'JetBrains Mono',monospace;letter-spacing:.6px;color:#bfe3d6;transition:border-color .4s,box-shadow .4s,color .4s}
.ec-node i{width:6px;height:6px;border-radius:50%;background:#d4af37;box-shadow:0 0 9px #d4af37;flex:none}
.ec-node.g i{background:#10b981;box-shadow:0 0 9px #10b981}
.ec-node:hover{border-color:#d4af3777;color:#f0d27a;box-shadow:0 0 22px #10b98130}
.ec-hud{position:absolute;font:9px/1 'JetBrains Mono',monospace;letter-spacing:1.6px;color:#8fa3ad}
.ec-hud-top{top:8%;left:8%}
.ec-hud-bottom{bottom:9%;right:9%;display:flex;align-items:center;gap:8px;color:#a6d8c2}
.ec-hud-bottom i{width:5px;height:5px;border-radius:50%;background:#10b981;box-shadow:0 0 11px #10b981;animation:ec-dot 1.8s ease-in-out infinite}
@keyframes ec-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes ec-dot{50%{opacity:.5;box-shadow:0 0 4px #10b981}}
@media(prefers-reduced-motion:reduce){.ec-core,.ec-hud-bottom i{animation:none}}
`}</style>
      <div className="ec-grid" data-parallax data-depth="0.3" />
      <svg className="ec-lines" viewBox="0 0 100 100" preserveAspectRatio="none" data-parallax data-depth="0.5">
        {NODES.map((n) => (
          <line key={`l-${n.label}`} x1={n.x} y1={n.y} x2="50" y2="50" />
        ))}
        {NODES.map((n, i) => (
          <circle key={`p-${n.label}`} className={`ec-pulse ${i % 2 ? 'g' : ''}`} r="0.9">
            <animateMotion dur={`${2.6 + (i % 3) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} path={`M${n.x} ${n.y} L50 50`} />
          </circle>
        ))}
      </svg>
      <div className="ec-core-wrap" data-parallax data-depth="1.4">
        <div className="ec-core">
          <Image src={MARK} alt="Obsiline emerald hexagon with a gold growth arrow" fittingType="fit" className="w-full h-full" />
        </div>
      </div>
      {NODES.map((n, i) => (
        <div key={n.label} className="ec-node-pos" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          <div className={`ec-node ${i % 2 ? 'g' : ''}`} data-parallax data-depth={0.8 + (i % 3) * 0.25}>
            <i />
            {n.label}
          </div>
        </div>
      ))}
      <span className="ec-hud ec-hud-top">DIGITAL ECOSYSTEM / INTELLIGENT SYSTEMS</span>
      <span className="ec-hud ec-hud-bottom"><i /> SYSTEM ONLINE</span>
    </div>
  );
}