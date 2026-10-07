import React from 'react';
import ObsilineMark from './ObsilineMark';
import { useParallax } from './useParallax';

export default function PrecisionAssembly() {
  const stage = useParallax({ rotate: 10, translate: 30 });
  return (
    <div className="pa-stage" ref={stage}>
      <style>{`
.pa-stage{position:relative;width:100%;height:100%;display:grid;place-items:center;overflow:hidden}
.pa-grid{position:absolute;inset:0;background-image:linear-gradient(#10b9810a 1px,transparent 1px),linear-gradient(90deg,#10b9810a 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at center,#000,transparent 72%);-webkit-mask-image:radial-gradient(ellipse at center,#000,transparent 72%)}
.pa-rings{position:absolute;inset:0;pointer-events:none}
.pa-ring{position:absolute;left:50%;top:50%;border:1px dashed #10b9812e;border-radius:50%;transform:translate(-50%,-50%);width:280px;height:280px;animation:pa-spin 80s linear infinite}
.pa-ring.r2{width:330px;height:330px;border-style:solid;border-color:#d4af3720;animation-duration:120s;animation-direction:reverse}
.pa-mark-wrap{position:relative;width:300px;height:300px;transform-style:preserve-3d}
.pa-mark{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 18px 26px #0008)}
.pa-mark .facet{transform-box:fill-box;transform-origin:center;animation:pa-lock 1s cubic-bezier(.34,1.3,.5,1) both,pa-flash 1s ease-out both}
.pa-mark .e1{--ox:-60px;--oy:-40px;--rot:-70deg;animation-delay:.2s,.2s}
.pa-mark .e2{--ox:-72px;--oy:6px;--rot:-120deg;animation-delay:.36s,.36s}
.pa-mark .e3{--ox:-58px;--oy:44px;--rot:70deg;animation-delay:.52s,.52s}
.pa-mark .e4{--ox:58px;--oy:44px;--rot:-70deg;animation-delay:.68s,.68s}
.pa-mark .e5{--ox:72px;--oy:6px;--rot:120deg;animation-delay:.84s,.84s}
.pa-mark .obs-arrow{opacity:0;transform-box:fill-box;transform-origin:center;animation:pa-rise 1s cubic-bezier(.22,1,.36,1) 1.5s both}
.pa-stage:hover .pa-mark .arrow-shaft,.pa-stage:hover .pa-mark .arrow-head{filter:drop-shadow(0 0 14px #f0d27a)}
.pa-mark .arrow-shaft,.pa-mark .arrow-head{transition:filter .4s}
.pa-hud{position:absolute;font:9px/1 'JetBrains Mono',monospace;letter-spacing:1.6px;color:#8fa3ad}
.pa-hud-top{top:8%;left:8%}
.pa-hud-bottom{bottom:9%;right:9%;display:flex;align-items:center;gap:8px;color:#a6d8c2}
.pa-hud-bottom i{width:5px;height:5px;border-radius:50%;background:#10b981;box-shadow:0 0 11px #10b981;animation:pa-dot 1.8s ease-in-out infinite}
@keyframes pa-lock{0%{opacity:0;transform:translate(var(--ox),var(--oy)) rotate(var(--rot)) scale(.55)}72%{opacity:1;transform:translate(calc(var(--ox)*.08),calc(var(--oy)*.08)) rotate(calc(var(--rot)*.06)) scale(1.05)}100%{opacity:1;transform:translate(0,0) rotate(0) scale(1)}}
@keyframes pa-flash{0%,68%,100%{filter:none}72%,82%{filter:drop-shadow(0 0 12px #10b981)}}
@keyframes pa-rise{0%{opacity:0;transform:translateY(46px)}100%{opacity:1;transform:translateY(0)}}
@keyframes pa-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
@keyframes pa-dot{50%{opacity:.5;box-shadow:0 0 4px #10b981}}
@media(prefers-reduced-motion:reduce){.pa-ring,.pa-hud-bottom i{animation:none}.pa-mark .facet,.pa-mark .obs-arrow{animation:none;opacity:1;transform:none}}
`}</style>
      <div className="pa-grid" data-parallax data-depth="0.3" />
      <div className="pa-rings" data-parallax data-depth="0.5">
        <div className="pa-ring" />
        <div className="pa-ring r2" />
      </div>
      <div className="pa-mark-wrap" data-parallax data-depth="1.3">
        <div className="pa-mark">
          <ObsilineMark id="pa" />
        </div>
      </div>
      <span className="pa-hud pa-hud-top">PRECISION ASSEMBLY / ENGINEERED TO LOCK</span>
      <span className="pa-hud pa-hud-bottom"><i /> SYSTEM ONLINE</span>
    </div>
  );
}