import React from 'react';
import { Image } from '@/components/ui/image';
export const MARK = 'https://media.base44.com/images/public/user_6abec6ebb1a885c892a10d01/f9fbed5d3_obsiline-mark.png';
export default function Brand({compact=false}) { return <a href="#home" className="brand" aria-label="Obsiline home"><Image src={MARK} alt="" fittingType="fit" className="brand-mark" />{!compact&&<span>OBSILINE<span className="brand-period">.</span></span>}</a>; }