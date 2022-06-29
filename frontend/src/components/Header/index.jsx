import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header__logo}>
            <img src="./img/mobile__logo.svg" alt="" />
          </div>
          <div className={styles.menu}>
            <Link to={'/'}>
              <div className={styles.menu__item}>Главная</div>
            </Link>
            <Link to={'/calculate'}>
              <div className={styles.menu__item}>Рассчитать стоимость</div>
            </Link>
            <Link to={'/contact'}>
              <div className={styles.menu__item}>Контакты</div>
            </Link>
            <Link to={'/safety'}>
              <div className={styles.menu__item}>Безопасная сделка</div>
            </Link>
            <Link to={'/check'}>
              <div className={styles.menu__item}>Отследить посылку</div>
            </Link>
          </div>
          <button className={styles.header__button}>Позвоните мне</button>
          <img
            src="./img/burger.svg"
            alt=""
            className={styles.burger}
            onClick={() => setVisible(!visible)}
          />
          <div
            className={styles.mobile__menu}
            style={visible ? { display: 'block' } : { display: 'none' }}>
            <Link to={'/'}>
              <div className={styles.menu__item} onClick={() => setVisible(!visible)}>
                Главная
              </div>
            </Link>
            <Link to={'/calculate'}>
              <div className={styles.menu__item} onClick={() => setVisible(!visible)}>
                Рассчитать стоимость
              </div>
            </Link>
            <Link to={'/contact'}>
              <div className={styles.menu__item} onClick={() => setVisible(!visible)}>
                Контакты
              </div>
            </Link>
            <Link to={'/safety'}>
              <div className={styles.menu__item}>Безопасная сделка</div>
            </Link>
            <Link to={'/check'}>
              <div className={styles.menu__item} onClick={() => setVisible(!visible)}>
                Отследить посылку
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
