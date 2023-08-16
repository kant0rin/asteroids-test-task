import React from 'react';
import cl from './Earth.module.scss'
import Image from "next/image";
import Img from '@/assets/imgs/planeta_zemlia_kosmos_167499_2560x1600 1.png'

const Earth = () => {
  return (
    <Image priority={true} className={cl.img} src={Img} alt='Earth' width={Img.width} height={Img.height}/>
  );
};

export default Earth;
