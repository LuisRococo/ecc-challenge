import React from 'react';
import styles from './ResultCard.module.scss';
import Card from '../Card/Card';

const ResultCard = () => {
  return (
    <div className={styles['result-card']}>
      <Card title="Result">
        <div className={styles['result-data']}>
          <div>
            <p>
              OHM: <span>200</span>
            </p>
          </div>

          <div>
            <p>
              Tolerance: <span>±200</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;
