import { PAGES, PAGE_CONFIGS } from 'constants/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './content.module.scss';
import { MainSheet } from './MainSheet/MainSheet';

export const Content = () => {
  return (
    <div className={styles['container']}>
      <Routes>
        <Route path={PAGE_CONFIGS[PAGES.FOO].route} element={<div>Foo</div>} />
        <Route path={PAGE_CONFIGS[PAGES.BAR].route} element={<div>Bar</div>} />
        <Route path="*" element={<MainSheet />} />
      </Routes>
    </div>
  );
};
