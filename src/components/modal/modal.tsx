import {FC, JSX} from 'react';
import styles from '@/components/modal/styles.module.scss'

type Props = {
  children?: JSX.Element
}

export const Modal: FC<Props> = ({children}) => {

  return (
    <>
      {
        children &&
          <div className={styles.wrapper}>
            <div className={styles.centered}>
              {children}
            </div>
          </div>
      }
    </>
  );
};
