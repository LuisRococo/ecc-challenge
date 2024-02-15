import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/transistor.png';

const Header = () => {
  return (
    <div data-testid="header" className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="logo" />
      <h1 data-testid="header-title" className={styles.header__title}>
        OHM CALCULATOR
      </h1>
    </div>
  );
};

export default Header;
