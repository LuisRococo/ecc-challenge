import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../images/transistor.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-14 bg-neutral text-neutral-content">
      <div className="footer container mx-auto">
        <aside>
          <img
            className={styles['footer__logo']}
            src={logo}
            alt="footer logo"
          />
          <p className="text-base">
            Luis Roberto Peña Vlza.
            <br />
            Made in 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/luis-roberto-pe%C3%B1a-v-220066197/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={styles['footer__sc-icon']} />
            </a>
            <a
              href="https://github.com/LuisRococo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles['footer__sc-icon']} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
