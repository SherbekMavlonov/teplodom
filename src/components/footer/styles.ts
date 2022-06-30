import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fff;
  .footer {
    background-color: #2d2b45;
    padding: 80px 0;
    margin-top: 100px;

    &__title {
      font-size: 20px;
      font-weight: 600;
      line-height: 27px;
      margin-bottom: 17px;
    }

    /* first column  */
    &__logo-wrap {
      width: 250px;
      display: flex;
      align-items: center;
    }
    &__logo {
      max-width: 80px;
      max-height: 80px;
      margin-right: 14px;
    }
    &__logo-title {
      font-size: 26px;
      font-weight: 600;
      line-height: 33px;
    }
    &__logo-subTitle {
      font-size: 12px;
      font-weight: 300;
      line-height: 14px;
      letter-spacing: 0.1em;
    }
    &__address {
      display: flex;
      color: #fff;
      width: 250px;
      margin-top: 13px;
    }
    &__text {
      font-size: 18px;
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
    }
    &__location {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
    &__location path {
      stroke: white;
    }
    /* Fourth column */

    &__links {
      display: flex;
      align-items: center;
      line-height: 27px;
    }
    &__link {
      width: 24px;
      height: 24px;
      margin-right: 20px;
      margin-top: 6px;
    }
    /* Second Row */

    &__description {
      text-align: center;
      margin-top: 77px;
      position: relative;
      background-color: #2d2b45;
      display: flex;
      align-items: center;
      justify-content: center;
      &::after {
        content: "";
        width: 35%;
        height: 3px;
        border-radius: 3px;
        background-color: white;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
      }
      &::before {
        content: "";
        width: 35%;
        height: 3px;
        border-radius: 3px;
        background-color: white;
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 0;
      }
    }
  }
  .footer__description {
  }
`;
