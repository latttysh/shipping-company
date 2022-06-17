import React from 'react';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <img src="./img/logo.png" alt="" />
          </div>
          <div className={styles.menu}>
            <div className={styles.menu__item}>Главная</div>
            <div className={styles.menu__item}>Рассчитать стоимость</div>
            <div className={styles.menu__item}>Контакты</div>
            <div className={styles.menu__item}>Отследить посылку</div>
          </div>
          <button className={styles.header__button}>Позвоните мне</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
