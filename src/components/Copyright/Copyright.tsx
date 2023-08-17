import React from 'react';
import {Typography} from "@/components/ui";
import cl from './Copyright.module.scss'

const Copyright = () => {
  return (
    <div className={cl.copyright}>
      <Typography variant='title-normal' tag='span'>© Все права и планета защищены</Typography>
    </div>
  );
};

export default Copyright;
