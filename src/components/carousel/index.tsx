import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselFirst from '../../assets/carousel1bg.svg'
import CarouselSecond from '../../assets/carousel2bg.svg'
import CarouselThree from '../../assets/carousel3bg.svg'
import CarouselFour from '../../assets/carousel4bg.svg'
import CarouselFive from '../../assets/carousel5bg.svg'

const CustomCarousel: React.FC = () => {
  return (
    <Carousel className='w-100'>
      <Carousel.Item interval={3000} className='w-100'>
        <img src={CarouselFirst} alt='img' className='w-100 bordered' />
        <Carousel.Caption>
          <div>
            <h3>Штукатурка гипсовая</h3>
            <p>
              пастообразный или порошковый материал, применяемый для
              выравнивания поверхностей перед нанесением на них материалов для
              отделки помещений. Шпаклёвками называют составы, применяемые для
              выравнивания поверхностей.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={CarouselSecond} alt='img' className='w-100 bordered' />
        <Carousel.Caption>
          <div>
            <h3>Пеноплекс Основа</h3>
            <p>
              Пеноплэкс» — российская компания, производитель тепло- и
              гидроизоляционных, а также декоративно-отделочных материалов на
              основе полимеров, основной вид продукции — теплоизоляционные плиты
              из экструзионного пенополистирола
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={CarouselThree} alt='' className='w-100 bordered' />
        <Carousel.Caption>
          <div>
            <h3>Гипсакартон</h3>
            <p>
              Cтроительный материал, представляющий собой лист, состоящий из
              двух слоёв строительной бумаги (картона) и сердечника из слоя
              затвердевшего гипсового теста с наполнителями.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={CarouselFour} alt='' className='w-100 bordered' />
        <Carousel.Caption>
          <div>
            <h3>Basalt wool тепло и тихо</h3>
            <p>
              Базальтовое волокно представляет собой материал, изготовленный из
              чрезвычайно тонких волокон базальта, который состоит из минералов
              плагиоклаза, пироксена и оливина. Он похож на стекловолокно.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src={CarouselFive} alt='img' className='w-100 bordered' />
        <Carousel.Caption>
          <div>
            <h3>Финская Фанера</h3>
            <p>
              многослойный строительный материал, изготавливаемый путём
              склеивания специально подготовленного шпона. Для повышения
              прочности фанеры слои шпона накладываются так.
            </p>
          </div>
          <img src={CarouselFive} alt='img' />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CustomCarousel
