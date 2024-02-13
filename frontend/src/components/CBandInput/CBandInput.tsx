import React, { FC } from 'react';
import styles from './CBandInput.module.scss';

interface ICBandColor {
  number: number;
}

const CBandInput: FC<ICBandColor> = ({ number }) => {
  return (
    <div className={styles['cband-input']}>
      <label>{number}° Color band</label>
      <select>
        <option value="value1">Blue</option>
        <option value="value1">Value 1</option>
        <option value="value1">Value 1</option>
      </select>
    </div>
  );
};

export default CBandInput;
