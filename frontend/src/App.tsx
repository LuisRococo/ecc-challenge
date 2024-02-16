import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import InputCard from './components/InputCard/InputCard';
import ResultCard from './components/ResultCard/ResultCard';
import Footer from './components/Footer/Footer';
import useOhmCl from './hooks/useOhmCl';
import { OhmResultContext } from './contexts/ohmResultContext';

function App() {
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
    <div className={styles['main-container']}>
      <div>
        <Header />

        <OhmResultContext.Provider value={ohmContextParams}>
          <div className={styles.cards__cont}>
            <ResultCard />
            <InputCard />
          </div>
        </OhmResultContext.Provider>
      </div>

      <Footer />
    </div>
  );
}

export default App;
