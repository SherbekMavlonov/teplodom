import React from "react";
import Wrapper from "./styles";
import { ReactComponent as Phone } from "../../assets/contact/clarity_mobile-phone-line.svg";
import { ReactComponent as Location } from "../../assets/contact/cil_location-pin.svg";
import { ReactComponent as Mail } from "../../assets/contact/charm_mail.svg";
import { ReactComponent as Schedule } from "../../assets/contact/akar-icons_schedule.svg";
import { ReactComponent as Time } from "../../assets/contact/carbon_time.svg";
import GlobalStyle from "../../globalStyles";

const Contact: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="contact">
        <div className="container">
          <div className="contact__title">Контакты</div>
          <div className="contact__content">
            <div className="row">
              <div className="col-4">
                <div className="contact__card">
                  <div className="contact__card-img">
                    <Phone />
                  </div>
                  <h3 className="contact__card-title">Телефон</h3>
                  <p className="contact__card-info">+998 (97) 761 62 51</p>
                </div>
              </div>
              <div className="col-4">
                <div className="contact__card">
                  <div className="contact__card-img">
                    <Location />
                  </div>
                  <h3 className="contact__card-title">Локация</h3>
                  <p className="contact__card-info">
                    ул. Уста Ширин, рынок Джамий, дом 134, магазин 131
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="contact__card">
                  <div className="contact__card-img">
                    <Mail />
                  </div>
                  <h3 className="contact__card-title">Е-майл</h3>
                  <p className="contact__card-info">Sardorraimov@gmail.com</p>
                </div>
              </div>
              <div className="col-4">
                <div className="contact__card">
                  <div className="contact__card-img">
                    <Phone />
                  </div>
                  <h3 className="contact__card-title">Телефон</h3>
                  <p className="contact__card-info">+998 (97) 761 62 51</p>
                </div>
              </div>
              <div className="col-4">
                <div className="contact__card">
                  <div className="contact__card-img">
                    <Schedule />
                  </div>
                  <h3 className="contact__card-title">Расписание</h3>
                  <p className="contact__card-info">
                    Мы в вашем распоряжении 7 дней в неделю!
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="contact__card">
                  <div className="contact__card-img">
                    <Time />
                  </div>
                  <h3 className="contact__card-title">Время</h3>
                  <p className="contact__card-info">
                    Каждый день с 8:00 – 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="contact__form-title">Заказать обратный звонок</h3>
          <div className="row mt-3">
            <div className="col-6">
              <div className="contact__form">
                <form action="!#">
                  <label className="contact__form-label" htmlFor="name">
                    Введите имя
                  </label>

                  <input className="simple-input" type="text" id="name" />
                  <label className="contact__form-label" htmlFor="phone">
                    Введите номер телефона
                  </label>
                  <input className="simple-input" type="text" id="phone" />
                  <label className="contact__form-label" htmlFor="comment">
                    Комментарии
                  </label>
                  <textarea
                    className="simple-input contact__form-textarea"
                    id="comment"
                    rows={4}
                  ></textarea>

                  <button type="submit" className="contact__form-btn">
                    Отправить
                  </button>
                </form>
              </div>
            </div>
            <div className="col-6">
              <div className="contact__form-map">
                <img src="https://picsum.photos/550" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
