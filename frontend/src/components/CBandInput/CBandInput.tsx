import React, { FC } from 'react';
import styles from './CBandInput.module.scss';
import { capitalizeFirstLetter } from '../../utils/utils';

interface ICBandColor {
  number: number;
  colors: string[];
  currentColor: string;
  bandName: string;
  onColorChange: (bandName: string, color: string) => void;
}

const CBandInput: FC<ICBandColor> = ({
  number,
  colors,
  currentColor,
  bandName,
  onColorChange,
}) => {
  return (
    <div data-testid="band-input" className={styles['cband-input']}>
      <label data-testid="band-number">{number}° Color band</label>
      <select
        className="select select-bordered w-full"
        value={currentColor}
        onChange={(e) => {
          onColorChange(bandName, e.currentTarget.value);
        }}
      >
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
