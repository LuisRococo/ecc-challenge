import React from 'react';
import useOhmCl from '../../hooks/useOhmCl';
import { OhmResultContext } from '../../contexts/ohmResultContext';
import ResultCard from '../../components/ResultCard/ResultCard';
import InputCard from '../../components/InputCard/InputCard';
import styles from './IndexPage.module.scss';

const IndexPage = () => {
  const { bandColors, result, loadResult, setBandColors, setResult } =
    useOhmCl();

  const ohmContextParams = {
    bandColors,
    result,
    loadResult,
    setResult,
    setBandColors,
  };
  return (
    <OhmResultContext.Provider value={ohmContextParams}>
      <div className={styles.cards__cont}>
        <ResultCard />
        <InputCard />
      </div>
    </OhmResultContext.Provider>
  );
};

export default IndexPage;
