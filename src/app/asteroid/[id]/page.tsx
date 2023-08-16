import React from 'react';
import {IOneAsteroidResponse} from "@/types";
import {getOneAsteroid} from "@/actions/get-one-asteroid";
import cl from './AsteroidPage.module.scss'
import AsteroidPageCard from "@/components/cards/AsteroidPageCard/AsteroidPageCard";
import ApproachesList from "@/components/ApproachesList/ApproachesList";

interface OwnProps {
  params: { id: number }
}

const Page: React.FC<OwnProps> = async ({params}) => {

  const asteroidId = params.id

  const asteroidInfo: IOneAsteroidResponse | null = await getOneAsteroid(asteroidId)

  return (
    <main className={cl.asteroidWrapper}>
      {
        asteroidInfo
          ? <div className={cl.list}>

            <AsteroidPageCard
              diameter={Math.ceil(asteroidInfo.estimated_diameter.meters.estimated_diameter_min)}
              name={asteroidInfo.name}
              isDangerous={asteroidInfo.is_potentially_hazardous_asteroid}
              id={asteroidId}
            />
            <ApproachesList approaches={asteroidInfo.close_approach_data}/>




          </div>
          : <h1>Ошибка загрузки данных астероида</h1>
      }
    </main>
  );
};

export default Page;
