import React from 'react';
import {Navigation} from "@/components/navigation/navigation";
import style from './styles.module.scss'

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <Navigation/>
    </header>
  )
};