import React from 'react';
import styles from './modalphone.module.scss';
import { useForm } from 'react-hook-form';
import axios from "axios";


// -1001544329561
function ModalPhone({ close, thanks }) {
  const { register, handleSubmit } = useForm();
  const onButtonClick = (data) => {
    var message = `Пришла новая заявка на обратную связь%0AName: ${data.Name}%0APhone: ${data.Phone}`
    axios.post(`https://api.telegram.org/bot2127951907:AAHtWd0aR-U07FeTKBfplcUU5wWdvOM-zYs/sendMessage?chat_id=-1001544329561&text=${message}&parse_mode=html`)
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
            <button className={styles.btn_conf}>Перезвоните мне</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalPhone;
