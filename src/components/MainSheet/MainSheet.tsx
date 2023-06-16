import React from 'react';
import styles from './mainSheet.module.scss';
import { Stats } from './components/Stats/Stats';

export const MainSheet = () => {
  return (
    <div className={styles['container']}>
      <Stats />
    </div>
  );
};
