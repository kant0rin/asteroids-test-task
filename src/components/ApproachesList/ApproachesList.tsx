import React from 'react';
import cl from './ApproachesList.module.scss'
import {Typography} from "@/components/ui";
import {CloseApproachData} from "@/types";
import ApproachCard from "@/components/cards/ApproachCard/ApproachCard";

interface ApproachesListProps {
  approaches: CloseApproachData[]
}

const ApproachesList: React.FC<ApproachesListProps> = ({approaches}) => {
  return (
    <div className={cl.wrapper}>
      <Typography variant='h-2' tag='h2'>Список сближений:</Typography>

      <ul className={cl.list}>
        {
          approaches.map((approach: CloseApproachData) => {

            const date = new Date(approach.epoch_date_close_approach).toLocaleString('ru', {day: 'numeric' , month:'short' , year: 'numeric', hour: 'numeric', minute: 'numeric',second: 'numeric'})
            const velocity = Math.ceil(parseInt(approach.relative_velocity.kilometers_per_second))
            const distance = Math.ceil(parseInt(approach.miss_distance.kilometers))
            const orbit = approach.orbiting_body

            return (
              <li>
                <ApproachCard
                  date={date}
                  velocity={velocity}
                  distance={distance}
                  orbit={orbit}
                />
              </li>
            )
          })
        }
      </ul>

    </div>
  );
};

export default ApproachesList;
