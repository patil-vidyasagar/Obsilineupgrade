import React from 'react';
import ObsilineMark from './ObsilineMark';
import { useParallax } from './useParallax';

export default function GrowthPath() {
  const stage = useParallax({ rotate: 9, translate: 28 });
  return (
    <div className="gp-stage" ref={stage}>
      <style>{`
.gp-stage{position:relative;width:100%;height:100%;display:grid;place-items:center;overflow:hidden}
.gp-grid{position:absolute;inset:0;background-image:linear-gradient(#10b9810c 1px,transparent 1px),linear-gradient(90deg,#10b9810c 1px,transparent 1px);background-size:46px 46px;mask-image:radial-gradient(ellipse at center,#000,transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center,#000,transparent 72%)}
.gp-rings{position:absolute;inset:0;pointer-events:none}
.gp-ring{position:absolute;left:50%;top:50%;border:1px solid #10b98130;border-radius:50%;transform:translate(-50%,-50%)}
.gp-ring.r1{width:240px;height:240px;animation:gp-ringpulse 6s ease-in-out infinite}
.gp-ring.r2{width:300px;height:300px;border-color:#d4af3728;animation:gp-ringpulse 6s ease-in-out infinite;animation-delay:-3s}
.gp-mark-wrap{position:relative;width:300px;height:300px;transform-style:preserve-3d}
.gp-float{width:100%;height:100%;animation:gp-float 6.5s ease-in-out infinite}
.gp-float .obsiline-mark{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 18px 28px #0008)}
.gp-float .facet{transform-box:fill-box;transform-origin:center;animation:gp-assemble .95s cubic-bezier(.22,1,.36,1) both}
.gp-float .e1{--ox:-52px;--oy:-34px;--rot:-52deg;animation-delay:.25s}
.gp-float .e2{--ox:-62px;--oy:0;--rot:-90deg;animation-delay:.42s}
.gp-float .e3{--ox:-50px;--oy:34px;--rot:52deg;animation-delay:.58s}
.gp-float .e4{--ox:50px;--oy:34px;--rot:-52deg;animation-delay:.74s}
.gp-float .e5{--ox:62px;--oy:0;--rot:90deg;animation-delay:.9s}
.gp-float .obs-arrow{opacity:0;animation:gp-arrow 1s cubic-bezier(.22,1,.36,1) 1.55s both}
.gp-float .arrow-shaft,.gp-float .arrow-head{filter:drop-shadow(0 0 4px #d4af3766)}
.gp-stage:hover .gp-float .arrow-shaft,.gp-stage:hover .gp-float .arrow-head{filter:drop-shadow(0 0 14px #f0d27a) drop-shadow(0 0 26px #d4af3766)}
.gp-spark{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
.gp-spark circle{filter:drop-shadow(0 0 8px #f0d27a)}
.gp-hud{position:absolute;font:9px/1 'JetBrains Mono',monospace;letter-spacing:1.6px;color:#8fa3ad}
.gp-hud-top{top:8%;left:8%}
.gp-hud-bottom{bottom:9%;right:9%;display:flex;align-items:center;gap:8px;color:#a6d8c2}
.gp-hud-bottom i{width:5px;height:5px;border-radius:50%;background:#10b981;box-shadow:0 0 11px #10b981;animation:gp-dot 1.8s ease-in-out infinite}
@keyframes gp-assemble{0%{opacity:0;transform:translate(var(--ox),var(--oy)) rotate(var(--rot)) scale(.5)}100%{opacity:1;transform:translate(0,0) rotate(0) scale(1)}}
@keyframes gp-arrow{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}
@keyframes gp-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes gp-ringpulse{0%,100%{opacity:.4;transform:translate(-50%,-50%) scale(1)}50%{opacity:.8;transform:translate(-50%,-50%) scale(1.04)}}
@keyframes gp-dot{50%{opacity:.5;box-shadow:0 0 4px #10b981}}
@media(prefers-reduced-motion:reduce){.gp-float,.gp-ring,.gp-hud-bottom i{animation:none}.gp-float .facet,.gp-float .obs-arrow{animation:none;opacity:1;transform:none}}
`}</style>
      <div className="gp-grid" data-parallax data-depth="0.3" />
      <div className="gp-rings" data-parallax data-depth="0.5">
        <div className="gp-ring r1" />
        <div className="gp-ring r2" />
      </div>
      <div className="gp-mark-wrap" data-parallax data-depth="1.3">
        <div className="gp-float">
          <ObsilineMark id="gp" />
          <svg className="gp-spark" viewBox="0 0 200 200">
            <circle r="4.5" fill="#f0d27a">
              <animateMotion dur="2.2s" begin="0.3s" fill="freeze" path="M76 132 L150 58 L165 42" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="2.2s" begin="0.3s" fill="freeze" />
            </circle>
          </svg>
        </div>
      </div>
      <span className="gp-hud gp-hud-top">GROWTH PATH / BUILD → CONNECT → GROW</span>
      <span className="gp-hud gp-hud-bottom"><i /> SYSTEM ONLINE</span>
    </div>
  );
}