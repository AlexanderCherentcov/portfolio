import React, { useState } from 'react';
import { Link, LinkProps } from '../links/Link';
import { linksHeader } from '@/assets/data';
import classes from './header.module.scss';
import logoImg from '@/assets/img/header/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content + ' ' + classes.content_header}>
        <div
          className={classes.content_header__info + ' ' + classes.info_header}
        >
          <img
            src={logoImg}
            alt="Логотип"
            className={classes.info_header__logo}
          />
          <h1 className={classes.info_header__title}>Александр</h1>
          <p className={classes.info_header__descr}>Frontend Developer</p>
        </div>
        <div
          className={`${classes.burger_menu} ${isMenuOpen ? classes.open : ''}`}
          onClick={toggleMenu}
        >
          <div
            className={classes.burger_menu__line + ' ' + classes.line1}
          ></div>
          <div
            className={classes.burger_menu__line + ' ' + classes.line2}
          ></div>
          <div
            className={classes.burger_menu__line + ' ' + classes.line3}
          ></div>
        </div>
        <nav
          className={`${classes.content_header__nav} ${classes.nav_header} ${isMenuOpen ? classes.nav_header_open : ''}`}
        >
          <ul className={classes.nav_header__list + ' ' + classes.list_nav}>
            {linksHeader.map((link: LinkProps) => (
              <Link key={link.id} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
