import React from 'react';
import classes from './Preloader.module.scss';

export default function Preloader() {
  return (
    <div className={classes.preloader}>
      <div className={classes.spinner}></div>
    </div>
  );
}
