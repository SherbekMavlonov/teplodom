import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
h3,p{
  margin: 0;
}
p{
  font-size: 13px;
}
.container{
  max-width: 1110px;
  margin: 0 auto;
  padding: 0;
}
.w-60{
  width: 60% !important;
}
.w-35{
  width: 35% !important;
}
.decaration-none{
  text-decoration: none !important;
  color: #000;
  margin: 0;
  &:hover{
    color: #000;
  }
}
.logo{
  margin-right: 8px;
  width: 70px;
  height: 70px;
}
.btn-Light{
 background-color: #fff !important;
}
.custom-btn{
  width: 56px;
  height: 56px;
  border-radius: 50% !important;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  &:focus{
    border: none !important;
    outline: none !important;
    box-shadow: none;
  }
}

.my-profile-btn{
  width: 170px;
  height: 56px;
  gap: 10px;
  border-radius: 15px;
}
.custom-input{
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(180, 180, 180, 0.25);
  border-radius: 15px;
  border: none;
  padding: 20px 14px;
  &:focus{
    box-shadow: 0px 2px 2px rgba(180, 180, 180, 0.25);
  }
}
`;
export default GlobalStyle;
