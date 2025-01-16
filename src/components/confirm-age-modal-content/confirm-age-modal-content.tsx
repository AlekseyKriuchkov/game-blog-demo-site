import React, {FC} from 'react';
import Icon from "@/assets/18.svg";
import style from "@/components/confirm-age-modal-content/styles.module.scss";

type Props = {
  confirmAge: (isAdult: boolean) => void
}

export const ConfirmAgeModalContent: FC<Props> = ({confirmAge}) => {
  return (
    <div className={style.wrapper}>
      <h1>Are you 18 or older?</h1>
      <div className={style.imageWrapper}>
        <Icon className={style.image}/>
      </div>
      <div className={style.buttonWrapper}>
        <button className={style.button} onClick={() => confirmAge(true)}>Yes, I am 18 years old or older</button>
        <button className={style.button} onClick={() => confirmAge(false)}>No, I'm not 18.</button>
      </div>
    </div>
  );
};
