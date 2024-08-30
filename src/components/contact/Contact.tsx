import React from 'react';
import { Link, LinkProps } from '../links/Link';
import { linksContacts } from '@/assets/data';
import { TitleSection } from '../titleSection/TitleSection';
import classes from './contact.module.scss';

export default function Contact() {
  return (
    <section className={classes.contact} id="contact">
      <div className={classes.contact__content}>
        <TitleSection>Контакты</TitleSection>
        <ul className={classes.contact__list}>
          {linksContacts.map((link: LinkProps) => (
            <Link key={link.id} {...link} />
          ))}
        </ul>
      </div>
    </section>
  );
}
