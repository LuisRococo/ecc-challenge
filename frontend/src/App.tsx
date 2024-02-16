import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles['main-container']}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/formulas" element={<div>Placeholder</div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
