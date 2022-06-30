import React from 'react';
import styles from './modalphone.module.scss';
import { useForm } from 'react-hook-form';

function ModalPhone({ close, thanks }) {
  const { register, handleSubmit } = useForm();
  const onButtonClick = (data) => {
    console.log(data);
    close();
    thanks();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>Обратная связь</div>
          <div className={styles.close} onClick={close}>
            X
          </div>
        </div>
        <div className={styles.inputs}>
          <form className={styles.form} onSubmit={handleSubmit(onButtonClick)}>
            <label>Ваше имя</label>
            <input type="text" {...register('Name')} placeholder="Ваше имя" />
            <label>Ваш телефон</label>
            <input type="text" {...register('Phone')} placeholder="Ваш телефон" />
            <button>Перезвоните мне</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalPhone;
