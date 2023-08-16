'use client'

import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import cl from './Cart.module.scss'
import {Typography} from "@/components/ui";
import Button from "@/components/ui/Button/Button";
import loadJsConfig from "next/dist/build/load-jsconfig";
import Link from "next/link";
import {IsInLunarContext} from "@/context";

const Cart = () => {

  const [asteroidsCount, setAsteroidsCount] = useState<number>(0)
  const {isInLunar} = useContext(IsInLunarContext)


  useEffect(() => {
    const cart = localStorage.getItem('cart')

    if (cart !== null) {
      setAsteroidsCount(JSON.parse(cart).length)
    }

    window.addEventListener('countChange', () => {

      const changedCart = localStorage.getItem('cart')
      if (changedCart !== null) {
        setAsteroidsCount(JSON.parse(changedCart).length)
      }
    })



  }, [])

  return (
    <div className={cl.cart}>
      <div className={cl.title}>
        <Typography variant={"h-3"} tag='h3'>Корзина</Typography>
        <Typography variant='title-normal' tag='span'>
          {
            asteroidsCount < 5
              ? <span>{asteroidsCount} астероида</span>
              : <span>{asteroidsCount} астероидов</span>
          }
        </Typography>
      </div>
      {
        asteroidsCount > 0
        && <Link href={`../order?isInLunar=${isInLunar}`}><Button size='big' isInOrder={false} onClick={() => {}}>Отправить</Button></Link>
      }
    </div>
  );
};

export default Cart;
