import React from 'react'
import { Card } from 'react-bootstrap'
import card from "../../assets/products/card1.png"
import {Wrapper} from "./styles"
const CategoryCard: React.FC = () => {
  return (
    <Wrapper>
     <Card className='category category__card'>
        <Card.Img variant="top" src={card} className={"category__img p-3"} />
        <Card.Body className='category__content'>
          <Card.Text className='category__title text-center'>
            Сухи смеси
          </Card.Text>
     </Card.Body>
        </Card>
    </Wrapper>
  )
}

export default CategoryCard