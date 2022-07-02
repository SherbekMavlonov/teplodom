import React from "react";
import { FaPlus, FaWindowClose } from "react-icons/fa";
import GlobalStyle from "../../globalStyles";
import Wrapper from "./styles";
export const RegisterModal: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="register">
        <button className="register__close">
          <FaPlus />
        </button>
        <div className="register__content">
          <div className="register__title">Регистрация</div>
          <p className="register__toSignIn">
            Иметь аккаунт?
            <a href="#">Войти</a>
          </p>
          <form action="!#" className="register__form form">
            <label className="form__label" htmlFor="name">
              Ваше имя
            </label>
            <input className="simple-input" type="text" id="name" />
            <label className="form__label" htmlFor="phone">
              Электронная почта или номер телефона
            </label>
            <input
              className="simple-input form__input"
              type="text"
              id="phone"
            />
            <label className="form__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="simple-input form__input"
              type="password"
              id="password"
            />
            <label className="form__label" htmlFor="password2">
              Подтвердить пароль
            </label>
            <input
              className="simple-input form__input"
              type="password"
              id="password2"
            />
            <div className="form__agree">
              <input type="checkbox" />
              <p className="form__agree-text">
                Я согласен с Условиями и Политикой конфиденциальности
              </p>
            </div>
            <button type="submit" className="form-btn simple-btn">
              Регистрация
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export const SignInrModal: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="register">
        <button className="register__close">
          <FaPlus />
        </button>
        <div className="register__content">
          <div className="register__title">Войти</div>
          <form action="!#" className="register__form form">
            <label className="form__label" htmlFor="email">
              Ваше имя
            </label>
            <input
              className="simple-input form__input"
              type="text"
              id="email"
            />

            <label className="form__label" htmlFor="password3">
              Пароль
            </label>
            <input
              className="simple-input form__input"
              type="password3"
              id="password"
            />

            <button type="submit" className="form-btn simple-btn">
              Регистрация
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export const SoldModal: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="register">
        <button className="register__close">
          <FaPlus />
        </button>
        <div className="register__content sold">
          <div className="register__title sold__title">
            Спасиба за покупка !
          </div>
          <p className="sold__text">Ваш номер заказ №127836</p>
          <button type="button" className="form-btn simple-btn">
            Главная страница
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export const Accept: React.FC = () => {
  return (
    <>
      <form action="!#" className="register__form form">
        <div className="row">
          <div className="col-6">
            <label className="form__label" htmlFor="total">
              Введите Штук
            </label>
            <input className="simple-input" type="text" id="total" />
          </div>
          <div className="col-6">
            <label className="form__label" htmlFor="soldPhone">
              Введите номер телефона
            </label>
            <input className="simple-input" type="text" id="soldPhone" />
          </div>
          <div className="col-6">
            <label className="form__label" htmlFor="soldName">
              Введите имя
            </label>
            <input className="simple-input" type="text" id="soldName" />
          </div>
          <div className="col-6">
            <label className="form__label" htmlFor="region">
              Введите область
            </label>
            <input className="simple-input" type="text" id="region" />
          </div>
          <div className="col-6">
            <label className="form__label" htmlFor="city">
              Введите город / район
            </label>
            <input className="simple-input" type="text" id="city" />
          </div>
          <div className="col-6">
            <label className="form__label" htmlFor="point">
              Введите населённый пункт
            </label>
            <input className="simple-input" type="text" id="point" />
          </div>
          <div className="col-12">
            <label className="form__label" htmlFor="soldAddress">
              Введите населённый пункт
            </label>
            <input className="simple-input" type="text" id="soldAddress" />
          </div>
        </div>

        <div className="form__agree">
          <input type="checkbox" />
          <p className="form__agree-text">
            Я согласен с <a href="#"> правилами публичной оферты</a>
          </p>
        </div>
        <button type="submit" className="form-btn simple-btn">
          Оформить заказ
        </button>
      </form>
    </>
  );
};
export const AcceptModal: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <div className="register accept">
        <button className="register__close">
          <FaPlus />
        </button>
        <div className="register__content">
          <div className="register__title">Оформление заказа</div>
          <Accept />
        </div>
      </div>
    </Wrapper>
  );
};
