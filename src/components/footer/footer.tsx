import React from 'react';
import {Navigation} from "@/components/navigation/navigation";
import style from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <Navigation/>
      <p className={style.text}>Esporte-br77.com is an innovative free online casino that invites you to the world of exciting gambling entertainment. Here you can play your favorite gambling games, feel the adrenaline of victory and enjoy exciting moments of excitement, and all this without any financial risk. We guarantee you bright impressions and a pleasant atmosphere so that you can enjoy the game to the fullest without worrying about money.</p>
    </footer>
  );
};
