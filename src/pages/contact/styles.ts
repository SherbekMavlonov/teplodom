import styled from "styled-components";

const Wrapper = styled.div`
  .contact {
    &__title {
      /* font-family: Inter; */
      font-size: 30px;
      font-weight: 600;
      line-height: 36px;
    }
    &__card {
      max-width: 320px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;

      &-img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 5px solid rgba(255, 177, 42, 1);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-title {
        /* font-family: Inter; */
        font-size: 24px;
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0.05em;
        text-align: center;
        margin-top: 20px;
      }
      &-info {
        /* font-family: Inter; */
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.05em;
        text-align: center;
        margin-top: 20px;
      }
    }

    &__form {
      width: 90%;

      &-title {
        margin-top: 100px;
      }
      &-label {
        /* font-family: Inter; */
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      &-textarea {
        resize: none;
      }
      &-btn {
        height: 40px;
        width: 106px;
        border-radius: 8px;
        border: none;
        color: white;
        background: rgba(255, 177, 42, 1);
        margin-top: 20px;
      }
      &-map {
        max-width: 530px;
        object-fit: cover;
        border-radius: 15px;
        overflow: hidden;
      }
    }
  }
`;
export default Wrapper;
