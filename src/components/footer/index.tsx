import React from 'react'
import whiteLogo from '../../assets/white-logo.svg'
import { GrLocation } from 'react-icons/gr'
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaIntercom,
  FaPhone,
  FaTelegram,
} from 'react-icons/fa'
import GlobalStyle from '../../globalStyles'
import { Wrapper } from './styles'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />

      <section className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='footer__column'>
                <div className='footer__logo-wrap'>
                  <div className='footer__logo'>
                    <img src={whiteLogo} alt='TEPLODOM' />
                  </div>
                  <div className=''>
                    <h2 className='footer__logo-title'>TEPLODOM</h2>
                    <p className='footer__logo-subTitle'>
                      Интернет магазинстрой материалов
                    </p>
                  </div>
                </div>
                <div className='footer__address'>
                  <p className='footer__text text'>
                    <GrLocation className='footer__location' />
                  </p>
                  <p className='footer__text'>
                    ул.Уста Ширин, рынок Джамий, дом 134
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='footer__column'>
                <div className='footer__title'>Быстрые ссылки</div>
                <div className='footer__text'>Мастерам</div>
                <div className='footer__text'>Оформление заказа</div>
                <div className='footer__text'>Пользовательское соглашение</div>
              </div>
            </div>
            <div className='col-2'>
              <div className='footer__column'>
                <div className='footer__title'>Полезное</div>
                <div className='footer__text'>О нас</div>
                <div className='footer__text'>Поставщикам</div>
                <div className='footer__text'>Возврат товара</div>
              </div>
            </div>
            <div className='col-3'>
              <div className='footer__column'>
                <div className='footer__title'>Контакты </div>
                <div className='footer__text'>
                  <FaPhone /> +998 97 761 62 51
                </div>
                <div className='footer__text'>
                  <FaPhone /> +998 93 556 91 31
                </div>
                <div className='footer__text footer__links'>
                  <FaTelegram className='footer__link' />
                  <FaInstagram className='footer__link' />
                  <FaFacebook className='footer__link' />
                  <FaIntercom className='footer__link' />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p className='footer__description footer__text'>
                <FaCopyright /> &nbsp; 2021 Teplodom. Все права защищены
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default Footer
