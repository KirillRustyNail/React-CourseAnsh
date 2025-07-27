import React, { useState, useEffect } from 'react';
import styles from './ScrollProgressBar.module.css';
import classNames from 'classnames';

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classNames(styles.scrollProgressWrapper)}>
      <div
        className={classNames(styles.scrollProgressBar)}
        style={{ '--progress': `${scrollProgress}%` }}
      />
    </div>
  );
};
