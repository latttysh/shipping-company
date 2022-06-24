import React from "react";
import styles from "./contacts.module.scss";

function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.title}>Контакты</div>
        <div className={styles.subtitle}>
          Для связи с нашими специалистами вы можете воспользоваться следующими
          способами:
        </div>
        <div className={styles.info}>
          1. Напишите нашим специалистам в техническую поддержку компании (окно
          диалога находится в правом нижнем углу нашего сайта)
        </div>
        <div className={styles.info}>
          2. Напишите в техническую поддержку Telegram (@smartexpress_operator)
        </div>
        <div className={styles.info}>
          3. Напишите на наш электронный адрес: sibtransportcompany@gmail.com
        </div>
      </div>
      <div className={styles.info}>
        4. Лично в офисе: 119021, Россия, г. Москва, МФК Башня Федерация,
        Пресненская наб., 12 (этаж 4)
      </div>
    </div>
  );
}

export default Contacts;
