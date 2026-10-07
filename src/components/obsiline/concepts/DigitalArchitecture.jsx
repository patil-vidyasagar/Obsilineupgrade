import React from 'react';
import { Image } from '@/components/ui/image';
import { MARK } from '@/components/obsiline/Brand';
import { useParallax } from './useParallax';

export default function DigitalArchitecture() {
  const stage = useParallax({ rotate: 14, translate: 46 });
  return (
    <div className="da-stage" ref={stage}>
      <style>{`
.da-stage{position:relative;width:100%;height:100%;display:grid;place-items:center;overflow:hidden}
.da-grid{position:absolute;inset:0;background-image:linear-gradient(#10b9810c 1px,transparent 1px),linear-gradient(90deg,#10b9810c 1px,transparent 1px);background-size:48px 48px;mask-image:linear-gradient(transparent,#000 40%,#000 60%,transparent);-webkit-mask-image:linear-gradient(transparent,#000 40%,#000 60%,transparent)}
.da-depth{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.da-layer{grid-area:1/1;width:230px;height:230px;border:1px solid #10b981;clip-path:polygon(50% 4%,90% 27%,90% 73%,50% 96%,10% 73%,10% 27%);opacity:.16;animation:da-breathe 7s ease-in-out infinite}
.da-layer.l2{width:260px;height:260px;border-color:#d4af37;opacity:.12;animation-delay:-2.3s}
.da-layer.l3{width:200px;height:200px;border-color:#10b981;opacity:.22;animation-delay:-4.6s}
.da-beam{grid-area:1/1;width:300px;height:300px;overflow:visible;pointer-events:none}
.da-beam line{stroke:url(#da-goldbeam);stroke-width:7;stroke-linecap:round;filter:drop-shadow(0 0 10px #d4af3770)}
.da-spark{fill:#f0d27a;filter:drop-shadow(0 0 6px #f0d27a)}
.da-core-wrap{grid-area:1/1;position:relative;width:180px;height:180px;transform-style:preserve-3d;z-index:3}
.da-core{width:100%;height:100%;animation:da-float 6s ease-in-out infinite;filter:drop-shadow(0 0 24px #10b98155)}
.da-stage:hover .da-core{filter:drop-shadow(0 0 40px #10b981aa)}
.da-hud{position:absolute;font:9px/1 'JetBrains Mono',monospace;letter-spacing:1.6px;color:#8fa3ad}
.da-hud-top{top:8%;left:8%}
.da-hud-bottom{bottom:9%;right:9%;display:flex;align-items:center;gap:8px;color:#a6d8c2}
.da-hud-bottom i{width:5px;height:5px;border-radius:50%;background:#10b981;box-shadow:0 0 11px #10b981;animation:da-dot 1.8s ease-in-out infinite}
@keyframes da-breathe{0%,100%{opacity:.1}50%{opacity:.28}}
@keyframes da-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes da-dot{50%{opacity:.5;box-shadow:0 0 4px #10b981}}
@media(prefers-reduced-motion:reduce){.da-core,.da-layer,.da-hud-bottom i{animation:none}}
`}</style>
      <div className="da-grid" data-parallax data-depth="0.25" />
      <div className="da-depth">
        <div className="da-layer l3" data-parallax data-depth="0.7" />
        <div className="da-layer" data-parallax data-depth="1" />
        <div className="da-layer l2" data-parallax data-depth="1.3" />
      </div>
      <svg className="da-beam" viewBox="0 0 200 200" data-parallax data-depth="1.1">
        <defs>
          <linearGradient id="da-goldbeam" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#d4af37" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#f0d27a" stopOpacity="0.9" />
            <stop offset="1" stopColor="#f7e7a8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <line x1="76" y1="132" x2="165" y2="42" />
        <circle className="da-spark" r="3">
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M76 132 L165 42" />
          <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle className="da-spark" r="2.4">
          <animateMotion dur="2.4s" begin="-1.2s" repeatCount="indefinite" path="M76 132 L165 42" />
          <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="-1.2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="da-core-wrap" data-parallax data-depth="1.6">
        <div className="da-core">
          <Image src={MARK} alt="Obsiline emerald hexagon with a gold growth arrow" fittingType="fit" className="w-full h-full" />
        </div>
      </div>
      <span className="da-hud da-hud-top">DIGITAL ARCHITECTURE / DEPTH & MOMENTUM</span>
      <span className="da-hud da-hud-bottom"><i /> SYSTEM ONLINE</span>
    </div>
  );
}