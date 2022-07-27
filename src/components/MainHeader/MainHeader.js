import React from 'react';

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>KlayPod Swap</h1>
    </header>
  );
};

export default MainHeader;
