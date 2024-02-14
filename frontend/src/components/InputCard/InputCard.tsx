import React, { useContext } from 'react';
import styles from './InputCard.module.scss';
import Card from '../Card/Card';
import CBandInput from '../CBandInput/CBandInput';
import {
  digitBandColors,
  multiplierBandColors,
  toleranceBandColors,
} from '../../constants/bandColors';
import { OhmResultContext } from '../../contexts/ohmResultContext';

const InputCard = () => {
  const { loadResult, setBandColors, setResult, bandColors } =
    useContext(OhmResultContext)!;

  const setColor = (bandName: string, color: string) => {
    const newBandColors = { ...bandColors, [bandName]: color };
    setBandColors(newBandColors);
    setResult(null);
  };

  return (
    <div className={styles['input-card']}>
      <Card title="Calculate OHM">
        <CBandInput
          number={1}
          bandName="bandAColor"
          currentColor={bandColors.bandAColor}
          colors={digitBandColors}
          onColorChange={setColor}
        />
        <CBandInput
          number={2}
          bandName="bandBColor"
          currentColor={bandColors.bandBColor}
          colors={digitBandColors}
          onColorChange={setColor}
        />
        <CBandInput
          number={3}
          bandName="bandCColor"
          currentColor={bandColors.bandCColor}
          colors={multiplierBandColors}
          onColorChange={setColor}
        />
        <CBandInput
          number={4}
          bandName="bandDColor"
          currentColor={bandColors.bandDColor}
          colors={toleranceBandColors}
          onColorChange={setColor}
        />

        <button onClick={loadResult} className={styles['result-button']}>
          Get result
        </button>
      </Card>
    </div>
  );
};

export default InputCard;
