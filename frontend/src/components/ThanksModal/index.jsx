import React from 'react';
import styles from './thanksmodal.module.scss';

function ThanksModal({ close }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>Ваша заявка оформлена</div>
          <div className={styles.close} onClick={close}>
            X
          </div>
        </div>
        <div className={styles.inputs}>
          Спасибо, ваша заявка отправлена нашему менеджеру. В скором времени с вами свяжутся
        </div>
        <button onClick={close}>Закрыть</button>
      </div>
    </div>
  );
}

export default ThanksModal;
