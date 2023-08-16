'use client'

import React, {useContext, useState} from 'react';
import {Typography} from "@/components/ui";
import cl from "@/components/sections/asteroid/AsteroidList/AsteroidList.module.scss";
import {useCart} from "@/hooks";
import {IsInLunarContext} from "@/context";

interface OwnProps {

}
const ListHeader: React.FC<OwnProps> = () => {

  const {isInLunar, setIsInLunar} = useContext(IsInLunarContext)


  return (
    <div>
      <Typography variant='h-1' tag='h1'>Ближайшие подлёты астероидов</Typography>
      <div className={cl.asteroidsControls}>
        <button onClick={() => setIsInLunar(false)}>
          {
            isInLunar
              ? <Typography variant='title-underlined' tag='span'>в километрах</Typography>
              : <Typography variant='title-bold' tag='span'>в километрах</Typography>
          }
        </button>
        |
        <button onClick={() => setIsInLunar(true) }>
          {
            isInLunar
              ? <Typography variant='title-bold' tag='span'>в лунных орбитах</Typography>
              : <Typography variant='title-underlined' tag='span'>в лунных орбитах</Typography>
          }
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
