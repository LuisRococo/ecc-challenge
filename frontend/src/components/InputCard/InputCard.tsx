import React from 'react';
import styles from './InputCard.module.scss';
import Card from '../Card/Card';
import CBandInput from '../CBandInput/CBandInput';
import {
  digitBandColors,
  multiplierBandColors,
  toleranceBandColors,
} from '../../constants/bandColors';

const InputCard = () => {
  return (
    <div className={styles['input-card']}>
      <Card title="Calculate OHM">
        <CBandInput number={1} colors={digitBandColors} />
        <CBandInput number={2} colors={digitBandColors} />
        <CBandInput number={3} colors={multiplierBandColors} />
        <CBandInput number={4} colors={toleranceBandColors} />

        <button className={styles['result-button']}>Get result</button>
      </Card>
    </div>
  );
};

export default InputCard;
