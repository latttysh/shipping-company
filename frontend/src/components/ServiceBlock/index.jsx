import React from 'react';
import styles from './serviceblock.module.scss';

function ServiceBlock({ title, text, img, width, marginTop }) {
  return (
    <div className={styles.serviceblock}>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{text}</div>
        <button className={styles.button}>Узнать больше</button>
      </div>
      <img
        src={`./img/${img}.png`}
        style={{ width: `${width}`, marginTop: `${marginTop}` }}
        alt=""
      />
    </div>
  );
}

export default ServiceBlock;
