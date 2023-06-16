import React from 'react';
import styles from './mainSheet.module.scss';
import { Stats } from './components/Stats/Stats';
import { Skills } from './components/Skills/Skills';

export const MainSheet = () => {
  return (
    <div className={styles['container']}>
      <Stats />
      <Skills />
    </div>
  );
};
