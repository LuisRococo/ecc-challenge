import React, { FC } from 'react';
import styles from './Card.module.scss';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
}

const Card: FC<IProps> = ({ children, title }) => {
  return (
    <div className={styles.card}>
      {title && <p className={styles.card__title}>{title}</p>}
      {children}
    </div>
  );
};

export default Card;
