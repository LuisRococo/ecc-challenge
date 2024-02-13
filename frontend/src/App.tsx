import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import InputCard from './components/InputCard/InputCard';
import ResultCard from './components/ResultCard/ResultCard';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.cards__cont}>
        <ResultCard />
        <InputCard />
      </div>
    </div>
  );
}

export default App;
