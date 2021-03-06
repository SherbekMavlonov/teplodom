import styled from "styled-components";

export const Wrapper = styled.div`
  .category {
    border-radius: 15px;
    border: none;
    box-shadow: 0 2px 8px #ddd;

    &__wrapper {
      padding-top: 100px;
    }

    &__wrapper-title {
      /* font-family: Inter; */
      font-size: 30px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0em;
      text-align: left;
      padding-bottom: 30px;
    }

    &__content {
      padding: 18px 0;
    }
    &__title {
      /* font-family: Inter; */
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;
