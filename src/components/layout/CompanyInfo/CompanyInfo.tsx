import React from 'react';
import cl from './CompanyInfo.module.scss'
import {Typography} from "@/components/ui";
const CompanyInfo = () => {
  return (
    <div className={cl.wrapper}>
      <h2 className={cl.logo}>ARMAGEDDON 2023</h2>
      <Typography variant='title-normal' tag={"p"}>ООО “Команда им. Б. Уиллиса”. <br/> Взрываем астероиды с 1998 года.</Typography>
    </div>
  );
};

export default CompanyInfo;
