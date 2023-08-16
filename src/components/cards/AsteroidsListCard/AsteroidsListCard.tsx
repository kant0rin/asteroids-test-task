'use client'

import React, {useEffect, useState} from 'react';
import cl from './AsteroidsListCard.module.scss'
import {Typography} from "@/components/ui";
import Image from "next/image";
import bigRock from '@/assets/imgs/bigRock.png'
import smallRock from '@/assets/imgs/smallRock.png'
import Button from "@/components/ui/Button/Button";
import {useCart} from "@/hooks";
import Link from "next/link";


export interface CardProps {
  date: string
  diameter: number
  name: string
  kilometreDistance: number
  lunarDistance: number
  isDangerous: boolean
  id: number
  isInLunar?: boolean
  withButton: boolean
}

export const ASTEROIDS_LIST_CARD_TEST_IDS = {
  DATE: 'asteroids-list-card-date',
  DIAMETER: 'asteroids-list-card-diameter',
  NAME: 'asteroids-list-card-name',
  KILOMETRE: 'asteroids-list-card-kilometre',
  LUNAR: 'asteroids-list-card-lunar',
  IS_DANGER: 'asteroids-list-card-is-danger',
  BIG_ROCK: 'asteroids-list-card-big-rock',
  SMALL_ROCK: 'asteroids-list-card-small-rock',
  BUTTON: 'asteroids-list-card-button'
}


const AsteroidsListCard: React.FC<CardProps> = ({date, isInLunar, kilometreDistance, lunarDistance, diameter, id, name, isDangerous, withButton}) => {

  const [isInCart, cartHandler] = useCart({date, kilometreDistance, lunarDistance, diameter, id, name, isDangerous})


  return (
    <div className={cl.wrapper}>
      <Link href={`../asteroid/${id}`}>
        <Typography variant='h-2' tag='h2'>
          <span data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.DATE}>{date}</span>
        </Typography>
      </Link>
      <div className={cl.row}>
        <div className={cl.distance}>
          {
            isInLunar
              ? <Typography variant='title-normal' tag='span'>
                <span data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.LUNAR}>{lunarDistance} </span>
                {lunarDistance < 10 ? <span>лунные орбиты</span> : <span>лунных орбит</span>}</Typography>

              : <Typography variant='title-normal' tag='span'>
                <span data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.KILOMETRE}>{kilometreDistance.toLocaleString()}
                </span> км</Typography>
          }
          <span className={cl.distanceRuler}>
            <span className={cl.triangleLeft}></span>
            <span className={cl.triangleRight}></span>
          </span>
        </div>
        {
          diameter > 100
            ? <Image src={bigRock} alt='big_rock' width={bigRock.width} height={bigRock.height} data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.BIG_ROCK}/>
            : <Image src={smallRock} alt='small_rock' width={smallRock.width} height={smallRock.height} data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.SMALL_ROCK}/>
        }
        <div className={cl.nameNDiameter}>
          <Typography variant='title-bold-underlined' tag='span'>
            <span data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.NAME}>{name}</span>
          </Typography>
          <Typography variant='title-micro' tag='span'>
            <span style={{display: 'flex', gap: '4px'}}>
              <span>⌀</span>
              <span data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.DIAMETER}>{diameter}</span>
              <span>м</span>
            </span>
          </Typography>
        </div>


      </div>
      <div className={cl.makeOrder}>
        {
          withButton
            && <div data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.BUTTON}>
                <Button
                    size='small'
                    isInOrder={isInCart}
                    onClick={cartHandler}
                >
                  {isInCart ? <span>В КОРЗИНЕ</span> : <span>ЗАКАЗАТЬ</span>}
                </Button>
            </div>
        }

        {isDangerous
          &&
            <div className={cl.dangerous} data-testid={ASTEROIDS_LIST_CARD_TEST_IDS.IS_DANGER}>
                <span style={{fontWeight: 400, color: 'yellow'}}>&#9888;</span>
                <Typography variant='title-small' tag='span'>Опасен</Typography>
            </div>
        }
      </div>

    </div>
  );
};

export default AsteroidsListCard;
