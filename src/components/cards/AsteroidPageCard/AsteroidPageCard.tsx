'use client'

import React, {useEffect} from 'react';
import cl from './AsteroidPageCard.module.scss'
import {Typography} from "@/components/ui";
import Image from "next/image";
import bigRock from "@/assets/imgs/bigRock.png";
import smallRock from "@/assets/imgs/smallRock.png";
import {IOneAsteroidResponse} from "@/types";

export interface AsteroidPageCardProps {
  diameter: number
  name: string
  isDangerous: boolean
  id: number
}

export const ASTEROID_PAGE_CARD_TEST_IDS = {
  ID: 'asteroid-page-card-id',
  DIAMETER: 'asteroid-page-card-diameter',
  IS_DANGER: 'asteroid-page-card-is-danger',
  NAME: 'asteroid-page-card-name',
  SMALL_ROCK: 'asteroid-page-card-small-rock',
  BIG_ROCK: 'asteroid-page-card-big-rock'
} as const

const AsteroidPageCard: React.FC<AsteroidPageCardProps> = ({diameter, name, isDangerous , id}) => {


  return (
    <div className={cl.wrapper}>
      <Typography variant='h-1' tag='h1'>Астероид id: <span data-testid={ASTEROID_PAGE_CARD_TEST_IDS.ID}>{id}</span></Typography>
      <h2 style={{marginTop: '8px', marginBottom: 0}}>
        <Typography variant='h-2' tag='span'>
          <span data-testid={ASTEROID_PAGE_CARD_TEST_IDS.NAME}>{name}</span>
        </Typography>
      </h2>
      <div className={cl.row}>
        {
          isDangerous
          &&
            <div className={cl.dangerous} data-testid={ASTEROID_PAGE_CARD_TEST_IDS.IS_DANGER}>
                <span style={{fontWeight: 400, color: 'yellow'}}>&#9888;</span>
                <Typography variant='title-small' tag='span'>Опасен</Typography>
            </div>
        }
        {
          diameter > 100
            ? <Image src={bigRock} alt='big_rock' width={bigRock.width} height={bigRock.height} data-testid={ASTEROID_PAGE_CARD_TEST_IDS.BIG_ROCK}/>
            : <Image src={smallRock} alt='small_rock' width={smallRock.width} height={smallRock.height} data-testid={ASTEROID_PAGE_CARD_TEST_IDS.SMALL_ROCK}/>
        }
        <Typography variant='title-normal' tag='span'>
            <span style={{display: 'flex', gap: '4px'}}>
              <span>⌀</span>
              <span data-testid={ASTEROID_PAGE_CARD_TEST_IDS.DIAMETER}>{diameter}</span>
              <span>м</span>
            </span>
        </Typography>
      </div>
    </div>
  );
};

export default AsteroidPageCard;
