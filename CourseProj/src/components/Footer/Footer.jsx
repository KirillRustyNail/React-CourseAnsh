import React from 'react';
import styles from './Footer.module.css';
import classNames from 'classnames';

export const Footer = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <p>© Restaurant App</p>
    </footer>
  );
};
