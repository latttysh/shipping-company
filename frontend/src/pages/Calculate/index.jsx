import React from 'react';
import styles from './calculate.module.scss';
import Item from '../../components/Item';
import Delivery from '../../components/Delivery';
import { useSelector, useDispatch } from 'react-redux';
import { addSender, addReciever, addItem, addSafety } from '../../redux/slices/CalculateSlice';
import { useForm } from 'react-hook-form';

function Calculate() {
  const [step, setStep] = React.useState(0);
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  const { register: register2, handleSubmit: handleSubmit2 } = useForm({
    mode: 'onBlur',
  });
  const { register: register3, handleSubmit: handleSubmit3 } = useForm({
    mode: 'onBlur',
  });

  const { register: register4, handleSubmit: handleSubmit4 } = useForm({
    mode: 'onBlur',
  });

  const onSubmitSender = async (data) => {
    setStep(step + 1);
    dispatch(addSender(data));
  };

  const onSubmitReciever = (data) => {
    setStep(step + 1);
    dispatch(addReciever(data));
  };

  const onSubmitItem = (data) => {
    dispatch(addItem(data));
  };

  const onSubmitSafety = (data) => {
    console.log(data);
    dispatch(addSafety(data));
    setStep(step + 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const items = useSelector((state) => state.info.items);
  console.log(items);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.link__level}>Главная > Калькулятор расчёта стоимости</div>
      <div className={styles.title}>Калькулятор расчёта стоимости</div>
      <div className={styles.subtitle}>Здесь вы можете рассчитать стоимость и срок доставки.</div>

      <div className={styles.calculator}>
        <form
          style={{ display: 'block' }}
          onSubmit={handleSubmit(onSubmitSender)}
          className={styles.stepOne}>
          <div className={styles.form__title}>Шаг 1. Откуда и от кого забрать?</div>
          <div className={styles.inputs}>
            <label>Имя отправителя</label>
            <input {...register('sender.name')} type="text" placeholder="Имя" />
            <label>Фамилия отправителя</label>
            <input {...register('sender.lastName')} type="text" placeholder="Фамилия" />
            <label>Отчество отправителя</label>
            <input {...register('sender.middleName')} type="text" placeholder="Отчество" />
            <label>Телефон отправителя</label>
            <input {...register('sender.phone')} type="text" placeholder="+7 (XXX) XX-XX" />
            <label>Страна, город, улица и дом отправителя</label>
            <input
              {...register('sender.address')}
              type="text"
              placeholder="Страна и город отправителя"
            />
            <button type="submit">Перейти к следующему шагу</button>
          </div>
        </form>
        <form
          className={styles.stepOne}
          onSubmit={handleSubmit2(onSubmitReciever)}
          style={step > 0 ? { display: 'block' } : { display: 'none' }}>
          <div className={styles.form__title}>Шаг 2. Кому и куда доставить?</div>
          <div className={styles.inputs}>
            <label>Имя получателя</label>
            <input {...register2('reciever.name')} type="text" placeholder="Имя" />
            <label>Фамилия получателя</label>
            <input {...register2('reciever.lastName')} type="text" placeholder="Фамилия" />
            <label>Отчество получателя</label>
            <input {...register2('reciever.middleName')} type="text" placeholder="Отчество" />
            <label>Телефон получателя</label>
            <input {...register2('reciever.phone')} type="text" placeholder="+7 (XXX) XX-XX" />
            <label>Страна, город, улица и дом получателя</label>
            <input
              {...register2('reciever.address')}
              type="text"
              placeholder="Страна и город получателя"
            />
            <button type="submit">Перейти к следующему шагу</button>
          </div>
        </form>
        <form
          style={step > 1 ? { display: 'block' } : { display: 'none' }}
          className={styles.stepTwo}
          onSubmit={handleSubmit3(onSubmitItem)}>
          <div className={styles.form__title}>Шаг 3. Что доставить?</div>
          <div className={styles.inputs}>
            <div className={styles.gabarits}>
              <div className="block">
                <label>Длина</label>
                <input {...register3('item.length')} placeholder="0 см" type="text" />
              </div>
              <div className="block">
                <label>Ширина</label>
                <input {...register3('item.width')} placeholder="0 см" type="text" />
              </div>
              <div className="block">
                <label>Высота</label>
                <input {...register3('item.height')} placeholder="0 см" type="text" />
              </div>
              <div className="block">
                <label>Вес</label>
                <input {...register3('item.weight')} placeholder="0 кг" type="text" />
              </div>
            </div>
            <label>Опись отправления</label>
            <textarea {...register3('item.description')} placeholder="Краткое описание" />
            {items.map((item, i) => (
              <Item
                length={item.length}
                width={item.width}
                height={item.height}
                weight={item.weight}
                key={i}
              />
            ))}
            <div className={styles.buttons}>
              <button type="submit" className={styles.button__add}>
                Добавить груз
              </button>
              <button type="button" onClick={nextStep} className={styles.button__next}>
                Перейти к следующему шагу
              </button>
            </div>
          </div>
        </form>
        <form
          onSubmit={handleSubmit4(onSubmitSafety)}
          className={styles.stepThird}
          style={step > 2 ? { display: 'block' } : { display: 'none' }}>
          <div className={styles.form__title}>Шаг 4. Дополнительные параметры</div>
          <div className={styles.inputs}>
            <div className="block">
              <div className={styles.checkbox}>
                <input {...register4('insurance')} type="checkbox" />
                <label>Страховка отправления</label>
              </div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, sit orci nisl, ut
                velit, orci dolor. In pulvinar eget ut sollicitudin quis fringilla posuere sociis.
                Massa facilisi urna sit tortor. Sagittis purus rutrum sit duis. Orci consectetur
                volutpat risus scelerisque. Duis augue eget nulla in cursus.
              </div>
            </div>
            <div className="block">
              <div className={styles.checkbox}>
                <input type="checkbox" {...register4('secure')} />
                <label>Безопасная сделка</label>
              </div>
              <div className={styles.description}>
                Для новых пользователей у нас есть услуга "Безопасная сделка". Сибирская
                транспортная компания выступает в роли третьего лица(посредника) в сделке между
                покупателем и продавцом.
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="submit" className={styles.button__next}>
                Перейти к следующему шагу
              </button>
            </div>
          </div>
        </form>

        <form
          className={styles.stepThird}
          style={step > 3 ? { display: 'block' } : { display: 'none' }}>
          <div className={styles.form__title}>Шаг 4. Дополнительные параметры</div>
          <div className={styles.inputs}>
            <Delivery />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculate;
