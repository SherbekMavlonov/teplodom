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
  width: 40% !important;
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
  padding: 20px 14px 14px 46px;
  font-size: 20px;
  width: 445px; 
  height: 56px;
  &:focus{
    box-shadow: 0px 2px 2px rgba(180, 180, 180, 0.25);
  }
}

.simple-input{  
  display: block;
  width: 100%;
  padding:12px 0 12px 20px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  &:focus{ 
    outline: none;
  }
}
.simple-btn{ 
  border-radius: 8px;
  padding: 12px 24px;
  border: none;
  color: white;
  background: rgba(255, 177, 42, 1);
  margin-top: 20px;

}

.icon{
  width: 28px;
  height: 28px;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  fill: #ccc;
}
.carousel-control-prev,.carousel-control-next{
  display: none;
}
.carousel-indicators{
  position: absolute;
  left: -320px !important;
  width: 50%;
}

.carousel-caption{
  width: 100%;
  position: absolute;
  left: 10px;
  top: 20px;
  display: flex;
  justify-content: space-between;
  text-align: start;
  div{
    width: 70%;
    h3{
      font-size: 48px;
      line-height: 56px;
    }
    p{
      font-size: 24px;
      line-height: 29px;
      margin-top: 30px;
    }
  }
  img{
    width: 30%;
  }
}

.navbar-item{
    display: inline-block;
    padding: 11px 25px;
    background-color: #EEEDED;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    &.active{
      background: linear-gradient(180deg, #FFB12A 0%, #EF8100 100%);
      color: #fff;
    }
  }
`;
export default GlobalStyle;
