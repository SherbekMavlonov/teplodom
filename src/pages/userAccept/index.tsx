import React from "react";
import { Accept } from "../../components/registerModal";

const UserAccept: React.FC = () => {
  return (
    <>
      <div className="userAccept">
        <div className="container">
          <div className="userAccept__content">
            <div className="userAccept__title">Быстрая пакупка</div>
            <div className="userAccept__subTitle">Купить Пеноплекс Основа</div>
            <Accept />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccept;
