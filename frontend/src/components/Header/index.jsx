import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <img src="./img/logo.png" alt="" />
          </div>
          <div className={styles.menu}>
            <Link to={'/'}>
              <div className={styles.menu__item}>Главная</div>
            </Link>
            <Link to={'/calculate'}>
              <div className={styles.menu__item}>Рассчитать стоимость</div>
            </Link>
            <Link to={'/'}>
              <div className={styles.menu__item}>Контакты</div>
            </Link>
            <Link to={'/'}>
              <div className={styles.menu__item}>Отследить посылку</div>
            </Link>
          </div>
          <button className={styles.header__button}>Позвоните мне</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
