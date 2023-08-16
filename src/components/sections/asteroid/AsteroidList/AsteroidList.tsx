'use client'

import React, {useContext, useState} from 'react';
import cl from './AsteroidList.module.scss'
import {AsteroidForList} from "@/types";
import AsteroidsListCard from "@/components/cards/AsteroidsListCard/AsteroidsListCard";
import {IsInLunarContext} from "@/context";

interface ListProps {
  asteroids: AsteroidForList[] | null
  withButton: boolean
  isInLunar?: boolean
}

const AsteroidList: React.FC<ListProps> = ({asteroids, withButton, isInLunar}) => {



  return (
      <div className={cl.asteroidListWrapper}>

        <ul className={cl.asteroidList}>
        {
          asteroids ?
            asteroids?.map((asteroid: AsteroidForList) => {
              return (
                <li key={asteroid.id}>
                  <AsteroidsListCard
                    date={asteroid.date}
                    diameter={asteroid.diameter}
                    name={asteroid.name}
                    kilometreDistance={asteroid.kilometreDistance}
                    lunarDistance={asteroid.lunarDistance}
                    isDangerous={asteroid.isDangerous}
                    id={asteroid.id}
                    isInLunar={isInLunar}
                    withButton={withButton}
                  />
                </li>
              )
            })
            : <h1>Ошибка загрузки данных</h1>
        }
        </ul>
      </div>
  );
};

export default AsteroidList;
