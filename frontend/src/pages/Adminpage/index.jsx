import React from 'react';
import styles from './adminpage.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchAddTrack } from '../../redux/slices/Check';

function AdminPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const [track, setTrack] = React.useState("")
  const onSubmit = (data) => {

    // 4124599773
    let min = Math.ceil(7000000000);
    let max = Math.floor(999999999);
    let track = Math.floor(Math.random() * (max - min + 1)) + min
    data.number = `${track}`
    dispatch(fetchAddTrack(data)).then(()=>setTrack(track));
    alert(
      'Трек номер успешно создан! Проверьте его через отслеживание трек номеров перед отслыки клиенту.',
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.admin}>
        <div className={styles.title}>Админ-панель</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <label>Прибытие</label>
              <input {...register('date')} type="text" placeholder="Прибытие" />
            </div>
            <div className={styles.item}>
              <label>Отправитель</label>
              <input {...register('sender')} type="text" placeholder="Отправитель" />
            </div>
            <div className={styles.item}>
              <label>Получатель</label>
              <input {...register('reciever')} type="text" placeholder="Получатель" />
            </div>
            <div className={styles.item}>
              <label>Опись вложения</label>
              <input {...register('description')} type="text" placeholder="Опись вложения" />
            </div>
            <div className={styles.item}>
              <label>Вес товара (в кг)</label>
              <input {...register('weight')} type="text" placeholder="Вес товара" />
            </div>
            <div className={styles.item}>
              <label>Адрес доставки</label>
              <input {...register('address')} type="text" placeholder="Адрес доставки" />
            </div>
            <div className={styles.item}>
              <label>Номер получателя</label>
              <input {...register('phoneReciever')} type="text" placeholder="Номер получателя" />
            </div>
            <select {...register('stage')}>
              <option value="1">Ожидает поступления посылки</option>
              <option value="2">Посылка принята в отделении</option>
              <option value="3">Ожидает оплаты</option>
              <option value="4">В пути</option>
              <option value="5">Ожидает получения</option>
            </select>
            <div className={styles.item}>
              <label>Трек номер</label>
              <input type="text" value={track} placeholder="Трек номер" />
            </div>
          </div>
          <button className={styles.submitbtn} type="submit">
            Создать трек номер
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
