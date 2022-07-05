import React from 'react'
import { Card, Button } from 'react-bootstrap'
import card from '../../assets/products/card1.png'
import basket from '../../assets/products/cardBasket.svg'
import like from '../../assets/products/Like.svg'
import { Wrapper } from './styles'
const Product: React.FC = () => {
  return (
    <Wrapper>
      <Card className='product product_card'>
        <span className='product__sale'>АКЦИЯ</span>
        <Card.Img
          variant='top'
          src={card}
          className={'p-5 product__img'}
          alt='img'
        />
        <Card.Body className='product__content'>
          <Card.Body className='product__titles'>
            <Card.Text className='product__title'>СНПТ-8000-Ц ЭРА</Card.Text>
            <Card.Text className='product__title model'>
              Стабилизатор напряжения
            </Card.Text>
          </Card.Body>
          <Card.Text className='product__price'>
            <Card.Text className='product__price-old'>22 000 cум</Card.Text>
            17 000 cум
          </Card.Text>
          <Button variant='primary' className='product__basket'>
            <img src={basket} alt='basket' /> &nbsp; В корзину
          </Button>
          <Button variant='primary' className='product__like'>
            <img src={like} alt='like' />
          </Button>
        </Card.Body>
      </Card>
    </Wrapper>
  )
}

const ProductWrap: React.FC = () => {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0]
  return (
    <Wrapper>
      <div className='product__wrapper'>
        <h2 className='product__wrapper-title'>Новинки на сайте</h2>
        <div className='row'>
          {arr.map((_, index) => (
            <div className='col-3' key={index}>
              <Product />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductWrap
