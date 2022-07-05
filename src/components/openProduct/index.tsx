import React from 'react'
import { Wrapper } from './styles'
import size from '../../assets/products/descriptionSize.svg'
import { ReactComponent as Pay } from '../../assets/products/pay.svg'
import { ReactComponent as Calendar } from '../../assets/products/calendar.svg'
import { ReactComponent as Shopping } from '../../assets/products/material-shopping.svg'
import { ReactComponent as Heart } from '../../assets/products/heartlike.svg'

const openProduct: React.FC = () => {
  return (
    <Wrapper>
      <div className='description'>
        <div className='row'>
          <div className='col-5'>
            <div className='description__img'>
              <img src='https://picsum.photos/400' alt='' />
            </div>
          </div>
          <div className='col-7'>
            <div className='description__content'>
              <h2 className='description__title'>Пеноплекс Основа</h2>
              <p className='description__text'>
                Синтетический теплоизоляционный материал, впервые созданный в
                США в 1941 году. Экструзионный пенополистирол имеет широкую
                сферу применения.
              </p>
              <div className='description__info'>
                <img src={size} alt='' className='description__info-icon' />
                <p className='description__info-text'>(1.185*0.585)(20мм)</p>
              </div>
              <div className='description__prices'>
                <p className='description__price'>14 600 cум</p>
                <p className='description__price-old'>19 600 cум</p>
              </div>
              <div className='description__func'>
                <div className='description__func-btn'>
                  <Pay />
                </div>
                <div className='description__func-btn'>
                  <Calendar />
                </div>
                <div className='description__func-btn'>
                  <Shopping />
                </div>
                <div className='description__func-btn'>
                  <Heart />
                </div>

                <div className='description__func-calculate'>
                  <button>-</button>
                  <button>2</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default openProduct
