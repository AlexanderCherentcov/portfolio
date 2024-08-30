import React from 'react';
import { TitleSection } from '../titleSection/TitleSection';
import classes from './about.module.scss';

export default function About() {
  return (
    <section className={classes.about} id="about">
      <div className={classes.about__content}>
        <TitleSection>Обо мне</TitleSection>
        <p className={classes.about__descr}>
          Меня зовут Александр, и я проработал в нефтяной промышленности
          бурильщиком более 12 лет и продолжаю работать по сегодняшний день.
          Однако я решил полностью сменить сферу деятельности и перейти в IT,
          выбрав профессию веб-разработчика. В настоящее время я продолжаю
          обучение на курсах веб-разработки от Skillbox, где осваиваю такие
          технологии, как HTML, CSS, JavaScript, React, Node.js, Webpack и Git.
          Опыт работы в нефтяной сфере научил меня управлять сложными
          процессами, работать в команде и решать задачи в напряженных условиях.
          Эти навыки, включая аналитическое мышление и умение работать под
          давлением, я успешно переношу в новую профессию.
        </p>
      </div>
    </section>
  );
}
