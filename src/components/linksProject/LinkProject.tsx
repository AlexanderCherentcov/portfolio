import React from 'react';
import classes from './linkProject.module.scss';

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

export const LinkProject: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  img,
}) => {
  return (
    <div className={classes.project}>
      <div className={classes.project__img}>
        <img src={img} alt="Изображение" />
      </div>
      <div className={classes.project__info}>
        <h3 className={classes.project__title}>{title}</h3>
        <p className={classes.project__description}>{description}</p>
      </div>
      <a
        className={classes.project__link}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Перейти к работе
      </a>
    </div>
  );
};
