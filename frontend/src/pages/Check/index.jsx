import React from "react";
import styles from "./check.module.scss";

import { fetchTrack } from "../../redux/slices/Check";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Check() {
  const [status, setStatus] = React.useState("null");
  const dispatch = useDispatch();
  const info = useSelector((state) => state.track)
  const location = useLocation();

  const isTrackLoading = info.status === "loading"

  React.useEffect(() => {
    if (location.state?.track) {
      console.log("Трек есть");
      setStatus("filled");
      dispatch(fetchTrack(location.state.track));
      
    }
  }, []);
  return (
    <div className={styles.container}>
      {
      isTrackLoading ? <></> :
        status !== "null" ? 
      info.status !== "error" ? (
        <>
          <div className={styles.check}>
            <div className={styles.check__title}>Отследить заказ</div>
            <div className={styles.check__status}>
              <div className={styles.item}>
                <img src="./img/done.svg" alt="" />
                <div className={styles.status}>Ожидает поступления посылки</div>
              </div>
              <div className={styles.item}>
                <img src="./img/done.svg" alt="" />
                <div className={styles.status}>Посылка принята в отделении</div>
              </div>
              <div className={styles.item}>
                <img src="./img/notDone.svg" alt="" />
                <div className={styles.status}>Ожидает оплаты</div>
              </div>
              <div className={styles.item}>
                <img src="./img/notDone.svg" alt="" />
                <div className={styles.status}>В пути</div>
              </div>
              <div className={styles.item}>
                <img src="./img/notDone.svg" alt="" />
                <div className={styles.status}>Ожидает получения</div>
              </div>
            </div>
          </div>
          <div className={styles.track__info}>
            <div className={styles.item}>
              <div className={styles.title}>Трек номер:</div>
              <div className={styles.info}>{info.data.number}</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Статус доставки:</div>
              <div className={styles.info}>Ожидает оплаты</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Отправлено:</div>
              <div className={styles.info}>-</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Прибытие:</div>
              <div className={styles.info}>16.08.2021</div>
            </div>
          </div>
          <div className={styles.track__info}>
            <div className={styles.item}>
              <div className={styles.title}>Отправитель:</div>
              <div className={styles.info}>{info.data.sender}</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Получатель:</div>
              <div className={styles.info}>{info.data.reciever}</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Опись вложения:</div>
              <div className={styles.info}>{info.data.description}</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Вес товара:</div>
              <div className={styles.info}>{info.data.weight} кг</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Безопасная сделка</div>
              <div className={styles.info}>Да</div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Адрес доставки:</div>
              <div className={styles.info}>
              {info.data.address}
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Номер получателя: </div>
              <div className={styles.info}>{info.data.phoneReciever}</div>
            </div>
          </div>
        </>) : <><div className="">Данный трек номер не найден</div></>
      : (
        <>
          <div className={styles.search}>
            <div className={styles.title}>Отследить заказ</div>
            <div className={styles.subtitle}>
              Форма «Отследить заказ» – удобный инструмент для поиска и
              отслеживания грузов. <br /> Для того, чтобы узнать статус заказа просто
              введите трек-номер в соответствующее поле.
            </div>
            <div className={styles.input__block}>
              <input type="text" placeholder="Трек-номер отправления..."/>
              <button>Найти отправление</button>
            </div>
          </div>
        </>
      )
      }
    </div>
  );
}

export default Check;
