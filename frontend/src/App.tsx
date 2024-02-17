import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import FormulasPage from './pages/FormulasPage/FormulasPage';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles['main-container']}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/formulas" element={<FormulasPage />} />
            <Route path="*" element={<Navigate to={"/"} replace={true} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
