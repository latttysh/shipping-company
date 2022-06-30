import React from 'react';
import styles from './safety.module.scss';

function Safety() {
  return (
    <div className={styles.container}>
      <div className={styles.safe}>
        <div className={styles.safe__title}>Безопасная сделка</div>
        <div className={styles.safe__subtitle}>
          Для новых пользователей у нас есть услуга "Безопасная сделка". Сибирская транспортная
          компания выступает в роли третьего лица(посредника) в сделке между покупателем и
          продавцом.
        </div>

        <div className={styles.safe_levels}>
          <div className={styles.level}>
            <div className={styles.level__title}>Договоренность участников</div>
            <div className={styles.counter}>1</div>
            <div className={styles.level__description}>
              После того, как покупатель и продавец обсудили условия сделки, продавец вызывает
              курьера нашей компании.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Договор и проверка</div>
            <div className={styles.counter}>2</div>
            <div className={styles.level__description}>
              Курьер составляет договор с описанием товара, проверяет его на наличие скрытых
              дефектов и повреждений.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Трек-номер</div>
            <div className={styles.counter}>3</div>
            <div className={styles.level__description}>
              После заключения договора с отправителем о предоставлении услуг нашей компании, курьер
              забирает посылку у отправителя, присваивая ей в системе трек-номер для отслеживания
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Безопасная оплата</div>
            <div className={styles.counter}>4</div>
            <div className={styles.level__description}>
              Покупателю необходимо связаться с оператором в чате для получения реквизитов оплаты
              услуги "Безопасной сделки". Денежные средства зарезервируются на счету компании до тех
              пор, пока получатель не подтвердит получение им товара.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Осмотр посылки</div>
            <div className={styles.counter}>5</div>
            <div className={styles.level__description}>
              После доставки курьером посылки получателю, получатель имеет право осмотра и проверки
              посылки в течение 1 часа.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Возврат средств</div>
            <div className={styles.counter}>6</div>
            <div className={styles.level__description}>
              При положительном результате осмотра курьер отмечает в системе доставку груза и
              система автоматически переводит денежные средства отправителю. При отрицательном
              результате осмотра, т.е. если получатель отказывается от забора посылки, составляется
              акт возврата денежных средств получателю и система делает автоматический возврат
              денежных средств в течение 10 минут.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Возврат посылки</div>
            <div className={styles.counter}>7</div>
            <div className={styles.level__description}>
              Посылка возвращается назад отправителю, сумма доставки, оплаченной отправителем,
              возврату не подлежит.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Safety;
