import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './home.module.scss';
import logoImg from '@/assets/img/header/logo.png';
import { TypingEffect } from '@/components/typingEffect/TypingEffect';

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/main');
  };

  return (
    <section className={classes.home}>
      <div className={classes.home__content}>
        <img src={logoImg} alt="Alexander" className={classes.home__photo} />
        <div className={classes.home__text}>
          <h1 className={classes.home__title}>Здравствуйте!</h1>
          <TypingEffect />
        </div>
        <button className={classes.home__button} onClick={handleButtonClick}>
          Продолжить
        </button>
      </div>
    </section>
  );
}
