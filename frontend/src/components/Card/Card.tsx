import React, { FC } from 'react';
import styles from './Card.module.scss';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  isDeactivated?: boolean;
}

const Card: FC<IProps> = ({ children, title, isDeactivated }) => {
  const cardClasses = `${styles.card} ${isDeactivated ? styles['card--deactivated'] : ''}`;

  return (
    <div data-testid="card" className={cardClasses}>
      {title && (
        <p data-testid="card-title" className="text-2xl font-bold mb-3">
          {title}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
