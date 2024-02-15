import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/transistor.png';

const Header = () => {
  return (
    <div data-testid="header" className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="logo" />
      <h1 data-testid="header-title" className={'text-4xl font-bold'}>
        OHM CALCULATOR
      </h1>
      <p className={styles['header-text']}>
        Calculate OHM value and tolerance from a resistor using our OHM
        calculator.
      </p>
    </div>
  );
};

export default Header;
