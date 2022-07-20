import React from 'react';
import styles from './delivery.module.scss';
import ThanksModal from '../ThanksModal';
import axios from "axios";
import {useSelector} from "react-redux";

function Delivery() {
  const [visibleModalThanks, setVisibleModalThanks] = React.useState(false);
    const send = useSelector((state) => state.info.sender);

  const onButtonClick = () => {
      var message = `Пришла новая заявка на отправление заказа%0AИмя: ${send.name}%0AФамилия: ${send.lastName}%0AОтчество: ${send.middleName}%0AТелефон: ${send.phone}%0AАдрес: ${send.address}`
      axios.post(`https://api.telegram.org/bot2127951907:AAHtWd0aR-U07FeTKBfplcUU5wWdvOM-zYs/sendMessage?chat_id=-1001544329561&text=${message}&parse_mode=html`)
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
