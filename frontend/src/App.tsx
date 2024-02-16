import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './router';

function App() {
  return (
    <div className={styles['main-container']}>
      <div>
        <Header />
        <Router />
      </div>

      <Footer />
    </div>
  );
}

export default App;
