import React from 'react'
import { Wrapper } from './styles'
import box from '../../assets/portfolio/box.svg'
import delivery from '../../assets/portfolio/delivery.svg'
import plane from '../../assets/portfolio/plane.svg'
import store from '../../assets/portfolio/store.svg'
import star from '../../assets/portfolio/star.svg'
const Portfolio: React.FC = () => {
  return (
    <Wrapper>
      <div className='portfolio container'>
        <h2 className='portfolio__title'>Наши преимущества</h2>
        <div className='row portfolio__items'>
          <div className='col-4'>
            <div className='portfolio__item '>
              <div className='portfolio__logo star'>
                <img src={star} alt='img' />
              </div>
              <div className='portfolio__text'>
                50 000 довольных клиентов по всей страна
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='portfolio__item'>
              <div className='portfolio__logo plane'>
                <img src={plane} alt='img' />
              </div>
              <div className='portfolio__text'>
                99% заказов приходит в назначенное время
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='portfolio__item'>
              <div className='portfolio__logo store'>
                <img src={store} alt='img' />
              </div>
              <div className='portfolio__text'>
                5 лет на рынке инструмента и техники
              </div>
            </div>
          </div>
        </div>
        <div className='row portfolio__items'>
          <div className='col-4 offset-2'>
            <div className='  portfolio__item'>
              <div className='portfolio__logo box'>
                <img src={box} alt='img' />
              </div>
              <div className='portfolio__text'>
                Боле 5 000 позиций товаров на складах
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className=' portfolio__item'>
              <div className='portfolio__logo delivery'>
                <img src={delivery} alt='img' />
              </div>
              <div className='portfolio__text'>
                Бесплатная доставка по городу Ташкент (при заказе от 3 млн.)
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Portfolio
