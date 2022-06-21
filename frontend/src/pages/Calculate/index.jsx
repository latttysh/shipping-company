import React from 'react';
import styles from './calculate.module.scss';
import Item from '../../components/Item';
import Delivery from '../../components/Delivery';

function Calculate() {
  return (
    <div className={styles.container}>
      <div className={styles.link__level}>Главная > Калькулятор расчёта стоимости</div>
      <div className={styles.title}>Калькулятор расчёта стоимости</div>
      <div className={styles.subtitle}>Здесь вы можете рассчитать стоимость и срок доставки.</div>

      <div className={styles.calculator}>
        <form className={styles.stepOne}>
          <div className={styles.form__title}>Шаг 1. Откуда и от кого забрать?</div>
          <div className={styles.inputs}>
            <label>Имя отправителя</label>
            <input type="text" placeholder="Имя" />
            <label>Фамилия отправителя</label>
            <input type="text" placeholder="Фамилия" />
            <label>Отчество отправителя</label>
            <input type="text" placeholder="Отчество" />
            <label>Телефон отправителя</label>
            <input type="text" placeholder="+7 (XXX) XX-XX" />
            <label>Страна, город, улица и дом отправителя</label>
            <input type="text" placeholder="Страна и город отправителя" />
            <button type="button">Перейти к следующему шагу</button>
          </div>
        </form>
        <form className={styles.stepOne} style={{ display: 'block' }}>
          <div className={styles.form__title}>Шаг 2. Кому и куда доставить?</div>
          <div className={styles.inputs}>
            <label>Имя получателя</label>
            <input type="text" placeholder="Имя" />
            <label>Фамилия получателя</label>
            <input type="text" placeholder="Фамилия" />
            <label>Отчество получателя</label>
            <input type="text" placeholder="Отчество" />
            <label>Телефон получателя</label>
            <input type="text" placeholder="+7 (XXX) XX-XX" />
            <label>Страна, город, улица и дом получателя</label>
            <input type="text" placeholder="Страна и город получателя" />
            <button type="button">Перейти к следующему шагу</button>
          </div>
        </form>
        <form className={styles.stepTwo}>
          <div className={styles.form__title}>Шаг 3. Что доставить?</div>
          <div className={styles.inputs}>
            <div className={styles.gabarits}>
              <div className="block">
                <label>Длина</label>
                <input placeholder="0 см" type="text" />
              </div>
              <div className="block">
                <label>Ширина</label>
                <input placeholder="0 см" type="text" />
              </div>
              <div className="block">
                <label>Высота</label>
                <input placeholder="0 см" type="text" />
              </div>
              <div className="block">
                <label>Вес</label>
                <input placeholder="0 кг" type="text" />
              </div>
            </div>
            <label>Опись отправления</label>
            <textarea placeholder="Краткое описание" />
            <Item />
            <div className={styles.buttons}>
              <button type="button" className={styles.button__add}>
                Добавить груз
              </button>
              <button type="button" className={styles.button__next}>
                Перейти к следующему шагу
              </button>
            </div>
          </div>
        </form>
        <form className={styles.stepThird}>
          <div className={styles.form__title}>Шаг 4. Дополнительные параметры</div>
          <div className={styles.inputs}>
            <div className="block">
              <div className={styles.checkbox}>
                <input type="checkbox" />
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
                <input type="checkbox" />
                <label>Безопасная сделка</label>
              </div>
              <div className={styles.description}>
                Для новых пользователей у нас есть услуга "Безопасная сделка". Сибирская
                транспортная компания выступает в роли третьего лица(посредника) в сделке между
                покупателем и продавцом.
              </div>
            </div>
            <div className={styles.buttons}>
              <button type="button" className={styles.button__add}>
                Добавить груз
              </button>
              <button type="button" className={styles.button__next}>
                Перейти к следующему шагу
              </button>
            </div>
          </div>
        </form>

        <form className={styles.stepThird}>
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
