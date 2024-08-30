import classes from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__text}>
          <p>&copy; 2024 Alexander. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
