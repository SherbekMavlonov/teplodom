import styled from "styled-components";

export const Wrapper = styled.div`
  .Pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    outline: transparent;

    & > li {
      margin: 0;
      height: 30px;
      width: 30px;
    }

    & > li > a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      color: black;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 4px;
      outline: transparent;
      cursor: pointer;

      &:hover {
        background-color: lightgrey;
      }
    }

    &__active a {
      background-color: blue;
      border-color: blue;
      color: white;

      &:focus {
        outline: transparent;
        cursor: default;
      }
    }

    & > .disabled > a {
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }
    &__next-link {
      width: 20px;
    }
    &__previous__link {
      width: 20px;
    }
    &__arrow {
      width: 20px;
    }
  }
`;
