import React from "react";
import { Card } from "react-bootstrap";
import card from "../../assets/products/card1.png";
import { Wrapper } from "./styles";
const CategoryCard: React.FC = () => {
  return (
    <Wrapper>
      <Card className="category category__card">
        <Card.Img variant="top" src={card} className={"category__img p-3"} />
        <Card.Body className="category__content">
          <Card.Text className="category__title text-center">
            Сухи смеси
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

const CategoryCardWrapper: React.FC = () => {
  const arr = [0, 0, 0, 0, 0, 0];
  return (
    <Wrapper>
      <div className="category__wrapper">
        <h2 className="category__wrapper-title">Категории</h2>
        <div className="row">
          {arr.map(() => (
            <div className="col-2">
              <CategoryCard />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default CategoryCardWrapper;
