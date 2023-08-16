'use client'

import React, {useState} from 'react';
import {AsteroidForList} from "@/types";
import ListHeader from "@/components/ListHeader/ListHeader";
import AsteroidList from "@/components/sections/asteroid/AsteroidList/AsteroidList";
import LoadMore from "@/components/LoadMore/LoadMore";
import cl from './AsteroidsPage.module.scss'
import Cart from "@/components/Cart/Cart";
import {IsInLunarContext} from "@/context";

interface AsteroidsPageProps {
  asteroids: AsteroidForList[] | null
}
const AsteroidsPage: React.FC<AsteroidsPageProps> = ({asteroids}) => {

  const [isInLunar, setIsInLunar] = useState<boolean>(false)

  return (
    <IsInLunarContext.Provider value={{isInLunar: isInLunar, setIsInLunar: setIsInLunar }}>

      <section className={cl.asteroidsWrapper}>
        <div className={cl.list}>
          <ListHeader/>
          <AsteroidList withButton={true} asteroids={asteroids} isInLunar={isInLunar}/>
          <LoadMore/>
        </div>
        <Cart/>
      </section>

    </IsInLunarContext.Provider>
  );
};

export default AsteroidsPage;
