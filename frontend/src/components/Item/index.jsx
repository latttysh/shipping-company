import React from 'react';
import styles from './item.module.scss';

function Item() {
  return (
    <div className={styles.item}>
      <img src="./img/item.svg" alt="" />
      <div className={styles.info}>
        <div className={styles.text}>Длина (см)</div>
        <div className={styles.counter}>100</div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>Ширина (см)</div>
        <div className={styles.counter}>100</div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>Высота (см)</div>
        <div className={styles.counter}>100</div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>Вес (кг)</div>
        <div className={styles.counter}>10.5</div>
      </div>
      <img style={{ cursor: 'pointer' }} src="./img/close.svg" alt="" />
    </div>
  );
}

export default Item;
