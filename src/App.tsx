import Footer from "./components/footer";
import Product from "./components/product";
import CategoryCard from "./components/category";
import Portfolio from "./components/portfolio";
import React from "react";
import CustomCarousel from "./components/carousel";
import Header from "./components/header";
import Home from "./pages/home";
import OpenProduct from "./components/openProduct";
import Delivery from "./pages/delivery";
import Contact from "./pages/contact";
import ReturnProduct from "./pages/returnProduct";
import Agreement from "./pages/agreement";
import { useEffect } from "react";
import {
  RegisterModal,
  SignInrModal,
  SoldModal,
  AcceptModal,
} from "./components/registerModal";
import axios from "axios";
const App: React.FC = () => {
  useEffect(() => {
    axios
      .get("http://192.168.43.227:3001/api/all-category")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <AcceptModal />
        <SoldModal />
        <SignInrModal />
        <RegisterModal />
        <Agreement />
        <ReturnProduct />
        <Contact />
        <Delivery />
        <OpenProduct />
        <Header />
        <CustomCarousel />
        <CategoryCard />
        <Product />
        <Portfolio />
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;
