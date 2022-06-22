import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../redux/slices/CalculateSlice';
import styles from './item.module.scss';

function Item({ length, width, height, weight }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteItem(weight));
  };
  return (
    <div className={styles.item}>
      <img src="./img/item.svg" alt="" />
      <div className={styles.info}>
        <div className={styles.text}>Длина (см)</div>
        <div className={styles.counter}>{length}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>Ширина (см)</div>
        <div className={styles.counter}>{width}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>Высота (см)</div>
        <div className={styles.counter}>{height}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>Вес (кг)</div>
        <div className={styles.counter}>{weight}</div>
      </div>
      <img
        onClick={() => dispatch(deleteItem(weight))}
        style={{ cursor: 'pointer' }}
        src="./img/close.svg"
        alt=""
      />
    </div>
  );
}

export default Item;
