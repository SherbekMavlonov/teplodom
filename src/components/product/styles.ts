import styled from "styled-components";

export const Wrapper = styled.div`
  .product {
    min-width: 255px;
    border-radius: 15px;
    box-shadow: 0 2px 4px 0 #ddd;
    position: relative;
    overflow: hidden;

    &__sale {
      position: absolute;
      top: 15px;
      left: -25px;
      background: red;
      color: white;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 2px;
      padding: 0 22px;
      transform: rotate(-45deg);
    }
    &__content {
      padding: 15px;
    }

    &__titles {
      padding: 0;
      height: 60px;
      max-height: 60px;
    }
    &__title {
      /* font-family: Inter; */
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
    }
    &__price {
      /* font-family: Inter; */
      font-size: 19px;
      font-weight: 700;
      line-height: 23px;
      margin: 14px 0 18px 0;
      position: relative;
      &-old {
        position: absolute;
        top: -20px;
        margin-left: 4px;
        /* font-family: Inter; */
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #dc0000;
        text-decoration: line-through;
      }
    }
    &__basket {
      background: #ffb12a;
      height: 42px;
      width: 171px;
      left: 180px;
      top: 2932px;
      border-radius: 8px;
      outline: none;
      border: none;
      /* font-family: Inter; */
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;

      &:focus {
        box-shadow: 0 0 10px #ffd12a;
      }
    }
    &__like {
      background: #ffb12a;
      height: 42px;
      width: 44px;
      left: 361px;
      top: 2932px;
      border-radius: 8px;
      margin-left: 10px;
      border: none;
      outline: none;
      border-color: transparent;
      text-align: center;
      padding: 0;

      &:focus {
        box-shadow: 0 0 10px #ffd12a;
      }
    }
  }
`;
