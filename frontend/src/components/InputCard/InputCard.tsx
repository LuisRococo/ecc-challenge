import React from 'react';
import styles from './InputCard.module.scss';
import Card from '../Card/Card';
import CBandInput from '../CBandInput/CBandInput';

const InputCard = () => {
  return (
    <div className={styles['input-card']}>
      <Card title="Calculate OHM">
        <CBandInput number={1} />
        <CBandInput number={2} />
        <CBandInput number={3} />
        <CBandInput number={4} />

        <button className={styles['result-button']}>Get result</button>
      </Card>
    </div>
  );
};

export default InputCard;
