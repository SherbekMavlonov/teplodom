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
const App: React.FC = () => {
  return (
    <>
      <div className="container">
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
