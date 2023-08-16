'use client'

import React, {useContext, useEffect, useState} from 'react';
import {AsteroidForList} from "@/types";
import {useInView} from "react-intersection-observer";
import {getAllAsteroids} from "@/actions/get-all-asteroids";
import AsteroidList from "@/components/sections/asteroid/AsteroidList/AsteroidList";
import {SyncLoader} from "react-spinners";
import cl from './LoadMore.module.scss'
import {IsInLunarContext} from "@/context";

interface OwnProps {

}

const LoadMore: React.FC<OwnProps> = () => {


  const todayDate = new Date().getTime()

  // todayDate.toJSON().slice(0,10)

  const [asteroids, setAsteroids] = useState<AsteroidForList[]>([])
  const [date, setDate] = useState(todayDate)

  const {ref, inView} = useInView({
  })



  const loadMoreAsteroids = async () => {
    const nextDate = date + 24 * 60 * 60 * 1000

    const newAsteroids = await getAllAsteroids(new Date(nextDate).toJSON().slice(0, 10))


    if (newAsteroids !== null) setAsteroids((prevState) => [...prevState, ...newAsteroids])
    setDate(nextDate)

  }

  useEffect(() => {
    if (inView) {
      loadMoreAsteroids()
    }
  }, [inView])



  return (
    <>
      <AsteroidList withButton={true} asteroids={asteroids}/>
      <div ref={ref} className={cl.wrapper}>
        <SyncLoader color='white'/>
      </div>
    </>
  );
};

export default LoadMore;
