import React from 'react';
import styles from './serviceblock.module.scss';
import { Link } from 'react-router-dom';

function ServiceBlock({ title, text, img, width, marginTop }) {
  return (
    <div className={styles.serviceblock}>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{text}</div>
        <Link to={'/calculate'}>
          <button className={styles.button}>Рассчитать</button>
        </Link>
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
