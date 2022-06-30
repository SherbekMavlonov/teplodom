import { AppDispatch } from "./../../store/store";
import styled from "styled-components";

export const Wrapper = styled.div`
  .home {
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

    &__text-paragraph {
      /* font-family: Inter; */
      font-size: 20px;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
    }
    &__img {
      border-radius: 15px;
      overflow: hidden;
    }
  }
`;
