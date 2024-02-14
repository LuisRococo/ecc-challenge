import React, { useContext } from 'react';
import styles from './ResultCard.module.scss';
import Card from '../Card/Card';
import { TbCircuitResistor } from 'react-icons/tb';
import { FaDiamond } from 'react-icons/fa6';
import { OhmResultContext } from '../../contexts/ohmResultContext';

const ResultCard = () => {
  const { result } = useContext(OhmResultContext)!;

  return (
    <div className={styles['result-card']}>
      <Card title="Result" isDeactivated={!result}>
        <div className={styles['result-data']}>
          <div className={styles['result-data__item']}>
            <TbCircuitResistor className={styles['result-data__item-icon']} />

            <p>
              OHM: <span>{result ? result.ohm : '-'}</span>
            </p>
          </div>

          <div className={styles['result-data__item']}>
            <FaDiamond className={styles['result-data__item-icon']} />

            <p>
              Tolerance: <span>{result ? '±' + result.tolerance : '-'}</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
