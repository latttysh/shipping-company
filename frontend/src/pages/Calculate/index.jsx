import React from 'react';
import styles from './calculate.module.scss';

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
        <form className={styles.stepOne}>
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
            <button type="button">Перейти к следующему шагу</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculate;
