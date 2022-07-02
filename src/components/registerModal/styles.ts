import styled from "styled-components";

const Wrapper = styled.div`
  .register {
    max-width: 600px;
    padding: 40px;
    border-radius: 35px;
    background-color: #f9f9f9;
    position: relative;
    &__close {
      height: 42px;
      width: 42px;
      position: absolute;
      top: 30px;
      right: 30px;
      font-size: 28px;
      font-weight: 400;
      border-radius: 50%;
      border: 3px solid;
      outline: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(45deg);
    }

    &__title {
      font-family: Inter;
      font-size: 42px;
      font-weight: 600;
      line-height: 51px;
    }

    &__toSignIn {
      font-family: Inter;
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
      margin: 14px 0;

      a {
        font-family: Inter;
        font-size: 15px;
        margin-left: 20px;
        display: inline-block;
        text-decoration: none;
      }
    }
    .form {
      &__label {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        margin: 24px 0 14px 0;
      }
      &__input {
        border: none;
        font-size: 16px;
      }
      &__agree {
        display: flex;
        align-items: center;
        margin-top: 24px;
        &-text {
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
        }
        input {
          width: 18px;
          height: 18px;
          margin-right: 18px;
        }
      }
      &-btn {
        margin-top: 28px;
      }
    }
  }
  .sold {
    text-align: center;

    &__title {
      margin-top: 30px;
    }
    &__text {
      font-family: Inter;
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
  }
  .accept {
    max-width: 1100px;
  }
`;
export default Wrapper;
