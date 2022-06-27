import styled from "styled-components";

export const Wrapper = styled.div`
  .portfolio {
    margin: 100px 0;

    &__title {
      /* font-family: Inter; */
      font-size: 30px;
      font-weight: 600;
      line-height: 36px;
      margin-bottom: 50px;
    }

    /* &__items{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        &__items-second{
            display: flex;
            align-items: center;
            justify-content: space-around;
        } */
    &__item {
      max-width: 315px;
      display: -webkit-box;
      align-items: center;
      margin-bottom: 72px;
    }
    &__logo {
      width: 72px;
      height: 72px;
      display: inline-block;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .star {
      background-color: #0053e026;
      width: 72px;
    }
    .plane {
      width: 72px;
      background-color: #8500b426;
    }
    .store {
      width: 72px;
      background-color: #31ceff26;
    }
    .box {
      width: 72px;
      background-color: #ffa30b26;
    }
    .delivery {
      width: 72px;
      background-color: #00e01626;
    }

    &__text {
      margin-left: 20px;
      width: 223px;
      /* font-family: Inter; */
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
  }
`;
