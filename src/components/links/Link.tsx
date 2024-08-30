import React from 'react';
import classes from './link.module.scss';

export interface LinkProps {
  name: React.ReactNode;
  href: string;
  id: string;
  nameLink?: React.ReactNode;
  type?: string;
  target?: string;
}

export const Link: React.FC<LinkProps> = ({
  name,
  href,
  id,
  nameLink,
  type,
  target,
}) => {
  const nameLinkClass =
    type == 'isSvg' ? classes.item__link_svg : classes.item__link_text;

  const targetName = target == 'blank' ? '_blank' : '_self';

  return (
    <li className={classes.item}>
      {nameLink && <div className={classes.item__name}>{nameLink}</div>}
      <a
        href={href}
        className={`${nameLinkClass}`}
        id={id}
        target={`${targetName}`}
        rel="noopener noreferrer"
      >
        {name}
      </a>
    </li>
  );
};
