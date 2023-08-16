import React from 'react';
import cl from './ApproachCard.module.scss'
import Typography from "@/components/ui/Typography/Typography";

export interface ApproachCardProps {
  date: string,
  velocity: number,
  distance: number,
  orbit: string,
}

export const APPROACH_CARD_TEST_IDS = {
  DATE: 'approach-card-date',
  VELOCITY: 'approach-card-velocity',
  DISTANCE: 'approach-card-distance',
  ORBIT: 'approach-card-orbit'
}


const ApproachCard: React.FC<ApproachCardProps> = ({date, distance, orbit, velocity}) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.row}>
        <Typography variant={"h-3"} tag='h3'>
          <span data-testid={APPROACH_CARD_TEST_IDS.DATE}>{date}</span>
        </Typography>
        <Typography variant='title-normal' tag='span'>
          <span data-testid={APPROACH_CARD_TEST_IDS.VELOCITY}>{velocity}</span> км/c
        </Typography>
      </div>
      <div className={cl.row}>
        <Typography variant='title-bold' tag='span'>
          <span data-testid={APPROACH_CARD_TEST_IDS.DISTANCE}>{distance.toLocaleString()}</span> км.
        </Typography>
        <Typography variant='title-normal' tag='span'>
          Орбита - <span data-testid={APPROACH_CARD_TEST_IDS.ORBIT}>{orbit}</span>
        </Typography>
      </div>

    </div>
  );
};

export default ApproachCard;
