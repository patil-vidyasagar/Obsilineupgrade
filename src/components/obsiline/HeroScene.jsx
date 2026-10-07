import React,{useEffect,useRef} from 'react';
import * as THREE from 'three';
export default function HeroScene(){const ref=useRef(null);useEffect(()=>{
 if(!window.matchMedia('(min-width:768px) and (prefers-reduced-motion:no-preference)').matches)return;
 const canvas=ref.current;if(!canvas.getContext('webgl2'))return;
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x000000,0);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.z=7;const group=new THREE.Group();scene.add(group);
 const metal=new THREE.MeshStandardMaterial({color:0xc9a961,metalness:.85,roughness:.32,transparent:true,opacity:.45});
 const geometries=[],materials=[metal];[[-.6,.35,0],[.75,-.25,.3],[.1,.8,.8]].forEach(([x,y,z],i)=>{const geometry=new THREE.TorusGeometry(1.8+i*.14,.007,5,130);geometries.push(geometry);const ring=new THREE.Mesh(geometry,metal);ring.rotation.set(x,y,z);group.add(ring);});
 const frameGeometry=new THREE.EdgesGeometry(new THREE.CylinderGeometry(1.52,1.52,.18,6));geometries.push(frameGeometry);const frameMaterial=new THREE.LineBasicMaterial({color:0x10b981,transparent:true,opacity:.28});materials.push(frameMaterial);const frame=new THREE.LineSegments(frameGeometry,frameMaterial);frame.rotation.x=Math.PI/2;group.add(frame);
 const ambient=new THREE.AmbientLight(0xf0d27a,1.3);scene.add(ambient);const light=new THREE.PointLight(0xf0d27a,30,12);light.position.set(2,2,3);scene.add(light);const green=new THREE.PointLight(0x10b981,15,10);green.position.set(-2,-1,2);scene.add(green);
 let raf,visible=true,targetX=0,targetY=0;const resize=()=>{const {width,height}=canvas.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();};const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);resize();
 const move=e=>{const r=canvas.getBoundingClientRect();targetX=(e.clientX-r.left)/r.width-.5;targetY=(e.clientY-r.top)/r.height-.5;light.position.x=targetX*4;light.position.y=-targetY*4;};const parent=canvas.parentElement;parent.addEventListener('pointermove',move,{passive:true});
 const draw=t=>{if(visible){group.rotation.y+=(targetX*.18-group.rotation.y)*.025;group.rotation.x+=(-targetY*.12-group.rotation.x)*.025;group.rotation.z=Math.sin(t*.00008)*.12;frame.rotation.z=t*.000035;renderer.render(scene,camera);}raf=requestAnimationFrame(draw);};const observer=new IntersectionObserver(([e])=>visible=e.isIntersecting);observer.observe(canvas);raf=requestAnimationFrame(draw);
 return()=>{cancelAnimationFrame(raf);observer.disconnect();resizeObserver.disconnect();parent.removeEventListener('pointermove',move);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();};
 },[]);return <canvas ref={ref} className="hero-scene" aria-hidden="true"/>;}