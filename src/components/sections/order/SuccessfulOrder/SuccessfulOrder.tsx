'use client'

import React, {useEffect, useState} from 'react';
import cl from './SuccessfulOrder.module.scss'
import {Typography} from "@/components/ui";
import {use} from "ast-types";
import {CardProps} from "@/components/cards/AsteroidsListCard/AsteroidsListCard";
import AsteroidList from "@/components/sections/asteroid/AsteroidList/AsteroidList";
import {IsInLunarContext} from "@/context";

interface OwnProps {
  isInLunar: boolean
}

const SuccessfulOrder: React.FC<OwnProps> = ({isInLunar}) => {

  const [asteroidList, setAsteroidList] = useState<CardProps[]>([])


  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart !== null) {
      setAsteroidList(JSON.parse(cart))
    }

    if (cart === '[]'){
      window.location.assign('.')
    }

    localStorage.setItem('cart', JSON.stringify([]))
  }, []);


  return (
      <div className={cl.orderWrapper}>
        <div className={cl.list}>
          <Typography variant={"h-1"} tag='h1'>Заказ отправлен!</Typography>
          <AsteroidList asteroids={asteroidList} withButton={false} isInLunar={isInLunar}/>
        </div>
      </div>
  );
};

export default SuccessfulOrder;
