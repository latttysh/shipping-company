import React from "react";
import styles from "./check.module.scss";

function Check() {
  return (
    <div className={styles.container}>
      <div className={styles.check}>
        <div className={styles.check__title}>Отследить заказ</div>
        <div className={styles.check__status}>
          <div className={styles.item}>
            <img src="./img/done.svg" alt="" />
            <div className={styles.status}>Ожидает поступления посылки</div>
          </div>
          <div className={styles.item}>
            <img src="./img/done.svg" alt="" />
            <div className={styles.status}>Посылка принята в отделении</div>
          </div>
          <div className={styles.item}>
            <img src="./img/notDone.svg" alt="" />
            <div className={styles.status}>Ожидает оплаты</div>
          </div>
          <div className={styles.item}>
            <img src="./img/notDone.svg" alt="" />
            <div className={styles.status}>В пути</div>
          </div>
          <div className={styles.item}>
            <img src="./img/notDone.svg" alt="" />
            <div className={styles.status}>Ожидает получения</div>
          </div>
        </div>


      </div>
      <div className={styles.track__info}>
          <div className={styles.item}>
            <div className={styles.title}>Трек номер:</div>
            <div className={styles.info}>№1120309540</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Статус доставки:</div>
            <div className={styles.info}>Ожидает оплаты</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Отправлено:</div>
            <div className={styles.info}>-</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Прибытие:</div>
            <div className={styles.info}>16.08.2021</div>
          </div>
        </div>
        <div className={styles.track__info}>
          <div className={styles.item}>
            <div className={styles.title}>Отправитель:</div>
            <div className={styles.info}>Иванов Андрей Сергеевич</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Получатель:</div>
            <div className={styles.info}>Рахимов Исмат Кудратулоевич</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Опись вложения:</div>
            <div className={styles.info}>Фотоаппарат Sony ILCE-6500</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Вес товара:</div>
            <div className={styles.info}>1.02 кг</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Безопасная сделка</div>
            <div className={styles.info}>Да</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Адрес доставки:</div>
            <div className={styles.info}>Москва, Рынок "Садовод", шестая линяя, 93 место</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Номер получателя:	</div>
            <div className={styles.info}>+7 (925) 103 55-50</div>
          </div>
        </div>
    </div>
  );
}

export default Check;
