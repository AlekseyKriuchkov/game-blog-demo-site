import React from 'react';
import style from './styles.module.scss'
import Icon from "@/assets/18.svg";

export const InfoBlock = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.section}>
        <h1>Smart Games Fun: Online Entertainment Games for Adults 18+!</h1>
        <p>We strive to ensure that our gaming stance is based on a robust verification system that provides safe age verification for our customers. This is a fundamental principle that defines our approach to creating safe gaming services, as we firmly believe that only responsible and conscientious adults should have access to games. We firmly believe that responsible gaming is not only about following the rules, but also about showing care and attention to our customers.</p>
        <h3>
          18+ www.gamblingtherapy.org – Gambling Therapy is a worldwide online support service offering counseling to people who have been negatively affected by gambling.
          <br/>
          <br/>
          www.gamblersanonymous.org/ga – Gamblers Anonymous offers telephone and in-person counseling to anyone affected by gambling.
        </h3>
      </section>
      <div className={style.imageWrapper}>
        <Icon  className={style.image}/>
      </div>
    </div>
  );
};
