import React, { FC } from 'react';
import styles from './CBandInput.module.scss';
import { capitalizeFirstLetter } from '../../utils/utils';

interface ICBandColor {
  number: number;
  colors: string[];
}

const CBandInput: FC<ICBandColor> = ({ number, colors }) => {
  return (
    <div className={styles['cband-input']}>
      <label>{number}° Color band</label>
      <select>
        {colors.map((color) => (
          <option key={color} value={color}>
            {capitalizeFirstLetter(color)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CBandInput;
