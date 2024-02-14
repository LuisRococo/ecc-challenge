import React, { useContext } from 'react';
import styles from './ResultCard.module.scss';
import Card from '../Card/Card';
import { TbCircuitResistor } from 'react-icons/tb';
import { FaDiamond } from 'react-icons/fa6';
import { OhmResultContext } from '../../contexts/ohmResultContext';

const ResultCard = () => {
  const { result } = useContext(OhmResultContext)!;

  return (
    <>
      {result && (
        <div className={styles['result-card']}>
          <Card title="Result">
            <div className={styles['result-data']}>
              <div className={styles['result-data__item']}>
                <TbCircuitResistor
                  className={styles['result-data__item-icon']}
                />

                <p>
                  OHM: <span>{result.ohm}</span>
                </p>
              </div>

              <div className={styles['result-data__item']}>
                <FaDiamond className={styles['result-data__item-icon']} />

                <p>
                  Tolerance: <span>±{result.tolerance}</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ResultCard;
