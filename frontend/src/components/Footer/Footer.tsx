import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/transistor.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles['footer__logo']} src={logo} alt="footer logo" />
      <p className={styles['footer__item']}>
        <strong>Made by: </strong>Luis Roberto Peña
      </p>
      <p className={styles['footer__item']}>
        <strong>Year: </strong>2024
      </p>
    </div>
  );
};

export default Footer;
