import styled from "styled-components";

export const Wrapper = styled.div`
  .description {
    padding: 20px;
    margin-top: 60px;

    &__img {
      max-width: 420px;
      height: 475px;
      padding: 40px 20px;
      object-fit: cover;
      border: 1px solid #e1e1e1;
      border-radius: 15px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      padding-left: 10px;
    }

    &__title {
      /* font-family: Inter; */
      font-size: 48px;
      font-weight: 600;
      line-height: 58px;
    }
    &__text {
      max-width: 520px;
      max-height: 116px;
      margin-top: 35px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: wrap;
      /*  */
      /* font-family: Inter; */
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
    }

    &__info {
      display: flex;
      align-items: center;
      margin-top: 30px;
      /* font-family: Inter; */
      &-icon {
        width: 28px;
        height: 28px;
        vertical-align: middle;
        margin: 4px 16px 0 0;
      }
      &-text {
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
      }
    }

    &__prices {
      display: flex;
      align-items: flex-end;
      margin-top: 34px;
    }
    &__price {
      /* font-family: Inter; */
      font-size: 40px;
      font-weight: 500;
      line-height: 48px;
    }
    &__price-old {
      /* font-family: Inter; */
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
      margin-left: 16px;
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.6);
    }
    &__func {
      margin-top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-btn {
        height: 64px;
        width: 64px;
        border: 3px solid;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s;
        /*  */
        svg path {
          fill: #222;
        }
        /*  */
        &:hover {
          background-color: #ffb12a;
          border: 3px solid #ffb12a;
          svg path {
            fill: white;
          }
        }
      }

      &-calculate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 180px;
        height: 64px;
        background: transparent;
        border: 2px solid #e1e1e1;
        border-radius: 15px;
        overflow: hidden;
        /*  */
        button {
          width: 33.3%;
          border: none;
          background: transparent;
          height: 100%;
          /* font-family: Inter; */
          font-size: 36px;
          font-weight: 500;
          line-height: 44px;
          &:hover {
            background-color: #e1e1e1;
          }
        }
        button:nth-child(2) {
          border: 2px solid #e1e1e1;
          border-top: none;
          border-bottom: none;
          cursor: auto;
          &:hover {
            background-color: transparent;
          }
        }
      }
    }
  }
`;
