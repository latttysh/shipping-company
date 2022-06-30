import React from 'react';
import styles from './delivery.module.scss';
import ThanksModal from '../ThanksModal';

function Delivery() {
  const [visibleModalThanks, setVisibleModalThanks] = React.useState(false);

  const onButtonClick = () => {
    setVisibleModalThanks(!visibleModalThanks);
  };
  return (
    <div className={styles.delivery}>
      {visibleModalThanks && (
        <ThanksModal close={() => setVisibleModalThanks(!visibleModalThanks)} />
      )}
      <div className={styles.info}>
        <img src="./img/courier.svg" alt="courier" />
        <div className="block">
          <div className={styles.title}>Доставка курьером</div>
          <div className={styles.description}>
            Лучшее соотношение цены и удобства Самый быстрый способ размещения заявки
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <div className="block">
          <div className={styles.title}>Примерное время доставки:</div>
          <div className={styles.total}>4 рабочих дня</div>
        </div>
        <div className="block">
          <div className={styles.title}>Стоимость:</div>
          <div className={styles.total}>7 400₽</div>
        </div>
      </div>
      <button type="button" onClick={onButtonClick}>
        Оформить онлайн-заявку
      </button>
    </div>
  );
}

export default Delivery;
