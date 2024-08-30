import React from 'react';
import classes from './title.module.scss';

interface TitleSectionProps {
  children: React.ReactNode;
}

export const TitleSection = ({ children }: TitleSectionProps) => {
  return <h2 className={classes.section_title}>{children}</h2>;
};
