import React, { useCallback, useEffect } from 'react'
import { Wrapper } from './styles'
import Product from '../../components/product'
import CategoryCard from '../../components/category'
import Portfolio from '../../components/portfolio'
import CustomCarousel from '../../components/carousel'
import { useAppSelector, useAppDispatch } from '../../hook/redux'
import { getCategories } from '../../store/category/index'

const Home: React.FC = () => {
  const state = useAppSelector((state) => state)

  const dispatch = useAppDispatch()

  const initApp = useCallback(async () => {
    await dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <Wrapper>
        <CustomCarousel />
        <CategoryCard />
        <Product />
        <Portfolio />
        <div className='home home__wrapper'>
          <div className='home__wrapper-title'>Интернет магазин Теплодом</div>
          <div className='home__content row'>
            <div className='col-6'>
              <div className='home__text '>
                <p className='home__text-paragraph'>
                  Компания Teplodom является лидером строительных материалов на
                  локальном рынке и предлагает широкий ассортимент строительных,
                  отделочных материалов и товаров для дома всем клиентам
                  Узбекистана.
                  <br />
                  <br />В каталоге на сайте Teplodom представлена продукция
                  самых известных брендов от крупнейших мировых производителей,
                  а также популярные отечественные торговые марки. Благодаря
                  удобной навигации, легко найти необходимый товар и отложить
                  его в корзину для оформления онлайн заказа.
                  <br />
                  <br />
                  Высокое качество, экспертные знания, качественные ресурсы и
                  улучшение производства с каждым днем является обязательным
                  требованием для нашего бренда!
                </p>
              </div>
            </div>

            <div className='col-6'>
              <div className='home__img'>
                <img src='https://picsum.photos/550/400' alt='img' />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Home
