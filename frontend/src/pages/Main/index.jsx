import React from "react";
import styles from "./main.module.scss";
import ServiceBlock from "../../components/ServiceBlock";
import { Link } from "react-router-dom";

function Main() {
  const [value, setValue] = React.useState("");

  const onChangeTrack = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__info}>
          <div className={styles.hero__uptitle}>
            Сибирская транспортная компания
          </div>
          <div className={styles.hero__title}>
            Доставка грузов <br />
            во все регионы России и за границу!
          </div>
          <div className={styles.hero__description}>
            Доставка грузов специалистами в области международной
            экспресс-доставки
          </div>
          <Link to={"/calculate"}>
          <button className={styles.hero__button}>Оформить доставку</button>
          </Link>
        </div>
        <div className={styles.hero__advantages}>
          <img className={styles.hero__bg} src="./img/hero-bg.png" alt="" />
          <div className={styles.hero__items}>
            <div className={styles.hero__item}>
              <img className={styles.item__img} src="./img/box.png" alt="" />
              <div className={styles.hero__item__info}>
                <div className={styles.info__counter}>6679</div>
                <div className={styles.info__text}>Отправлено посылок</div>
              </div>
            </div>
            <div className={styles.hero__item} style={{ marginLeft: "5vw" }}>
              <img className={styles.item__img} src="./img/human.png" alt="" />
              <div className={styles.hero__item__info}>
                <div className={styles.info__counter}>321</div>
                <div className={styles.info__text}>Довольных клиентов</div>
              </div>
            </div>
            <div className={styles.hero__item} style={{ marginLeft: "12vw" }}>
              <img
                className={styles.item__img}
                src="./img/indicator.png"
                alt=""
              />
              <div className={styles.hero__item__info}>
                <div className={styles.info__counter}>3 645 400</div>
                <div className={styles.info__text}>Километров в пути</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputs__block}>
        <div className={styles.search__block}>
          <div className={styles.search__title}>Отследить</div>
          <div className={styles.search}>
            <input
              onChange={onChangeTrack}
              placeholder="Трек-номер отправления..."
              type="text"
            />
            <Link to={"/check"} state={{ track: value }}>
              <img src="./img/search.png" alt="" />
            </Link>
          </div>
        </div>
        <div className={styles.calculate__block}>
          <div className={styles.calculate__title}>Отправить посылку</div>
          <div className={styles.calculate__sender}>
            <input placeholder="Город отправителя" type="text" />
          </div>
          <div className={styles.calculate__reciever}>
            <input placeholder="Город получателя" type="text" />
          </div>
          <Link to={"/calculate"}>
          <button className={styles.calculate__btn}>Рассчитать</button>
          </Link>
        </div>
      </div>

      <div className={styles.service}>
        <div className={styles.service__title}>Наши услуги</div>
        <div className={styles.service__blocks}>
          <ServiceBlock
            text={`Наша транспортная компания доставляет по всей России без ограничений. Вам нужно всего лишь указать город.`}
            title={"Доставка по России"}
            img={"rocket"}
            width={"35%"}
          />
          <ServiceBlock
            text={`Самый распространенный способ перевозки грузов. Никакие другие транспортные средства не имеют сопоставимой инфраструктуры`}
            title={"Перевозка грузовыми машинами"}
            img={"car"}
            width={"35%"}
            marginTop={"-30px"}
          />
          <ServiceBlock
            text={`Вам нужно отправить посылку в другую страну? Без проблем. Укажите точный адрес и мы с вами свяжемся.`}
            title={"Международная доставка"}
            img={"planet"}
            width={"45%"}
            marginTop={"-30px"}
          />
          <ServiceBlock
            text={`Железнодорожный транспорт отличается высокой грузоподъемностью и скоростью доставки`}
            title={"Перевозка контейнером"}
            img={"container"}
            width={"30%"}
            marginTop={"-30px"}
          />
          <ServiceBlock
            text={`В нашем штате работает более 400 курьеров по всему миру. Ваша посылка дойдёт прям до двери.`}
            title={"Курьерская доставка"}
            img={"handes"}
            width={"40%"}
            marginTop={"20px"}
          />
          <ServiceBlock
            text={`Надежные и прочные универсальные тары могут транспортироваться службами разных стран.`}
            title={"Перевозка грузовым поездом"}
            img={"rocket"}
            width={"35%"}
          />
        </div>
      </div>

      <div className={styles.advantages}>
        <div className={styles.advantages__title}>Наши преимущества</div>
        <div className={styles.advantages__block}>
          <div className={styles.advantages__item}>
            <div className={styles.advantages__img}>
              <img src="./img/speed.svg" alt="" />
            </div>
            <div className={styles.advantages__item__title}>Скорость</div>
            <div className={styles.advantages__item__description}>
              Быстрый расчёт стоимости и оформление заявки
            </div>
          </div>
          <div className={styles.advantages__item}>
            <div className={styles.advantages__img}>
              <img src="./img/security.svg" alt="" />
            </div>
            <div className={styles.advantages__item__title}>Безопасность</div>
            <div className={styles.advantages__item__description}>
              Обязательная страховка всех перевозимых грузов
            </div>
          </div>
          <div className={styles.advantages__item}>
            <div className={styles.advantages__img}>
              <img src="./img/support.svg" alt="" />
            </div>
            <div className={styles.advantages__item__title}>Поддержка</div>
            <div className={styles.advantages__item__description}>
              Полное сопровождение всего процесса доставки
            </div>
          </div>
          <div className={styles.advantages__item}>
            <div className={styles.advantages__img}>
              <img src="./img/five.svg" alt="" />
            </div>
            <div className={styles.advantages__item__title}>Надёжность</div>
            <div className={styles.advantages__item__description}>
              5 лет опыта на рынке грузовых перевозок
            </div>
          </div>
        </div>
      </div>

      <div className={styles.safe}>
        <div className={styles.safe__title}>Безопасная сделка</div>
        <div className={styles.safe__subtitle}>
          Для новых пользователей у нас есть услуга "Безопасная сделка".
          Сибирская транспортная компания выступает в роли третьего
          лица(посредника) в сделке между покупателем и продавцом.
        </div>

        <div className={styles.safe_levels}>
          <div className={styles.level}>
            <div className={styles.level__title}>Договоренность участников</div>
            <div className={styles.counter}>1</div>
            <div className={styles.level__description}>
              После того, как покупатель и продавец обсудили условия сделки,
              продавец вызывает курьера нашей компании.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Договор и проверка</div>
            <div className={styles.counter}>2</div>
            <div className={styles.level__description}>
              Курьер составляет договор с описанием товара, проверяет его на
              наличие скрытых дефектов и повреждений.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Трек-номер</div>
            <div className={styles.counter}>3</div>
            <div className={styles.level__description}>
              После заключения договора с отправителем о предоставлении услуг
              нашей компании, курьер забирает посылку у отправителя, присваивая
              ей в системе трек-номер для отслеживания
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Безопасная оплата</div>
            <div className={styles.counter}>4</div>
            <div className={styles.level__description}>
              Покупателю необходимо связаться с оператором в чате для получения
              реквизитов оплаты услуги "Безопасной сделки". Денежные средства
              зарезервируются на счету компании до тех пор, пока получатель не
              подтвердит получение им товара.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Осмотр посылки</div>
            <div className={styles.counter}>5</div>
            <div className={styles.level__description}>
              После доставки курьером посылки получателю, получатель имеет право
              осмотра и проверки посылки в течение 1 часа.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Возврат средств</div>
            <div className={styles.counter}>6</div>
            <div className={styles.level__description}>
              При положительном результате осмотра курьер отмечает в системе
              доставку груза и система автоматически переводит денежные средства
              отправителю. При отрицательном результате осмотра, т.е. если
              получатель отказывается от забора посылки, составляется акт
              возврата денежных средств получателю и система делает
              автоматический возврат денежных средств в течение 10 минут.
            </div>
          </div>
          <div className={styles.level}>
            <div className={styles.level__title}>Возврат посылки</div>
            <div className={styles.counter}>7</div>
            <div className={styles.level__description}>
              Посылка возвращается назад отправителю, сумма доставки, оплаченной
              отправителем, возврату не подлежит.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
