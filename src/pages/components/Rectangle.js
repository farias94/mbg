import React from 'react';
import styles from '../../styles/Rectangle.module.css';

const Rectangle = () => {
  return (
    <div className={styles.rectangle}>
      <p>
        Serving for over<br/> <span>20 years</span>.
      </p>
    </div>
  );
};

export default Rectangle;
