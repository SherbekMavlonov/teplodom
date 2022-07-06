import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import NavbarLinks from "./components/navLinks";
import Home from "./pages/home";
import New from "./pages/new";
import Delivery from "./pages/delivery";
import Contact from "./pages/contact";
import ReturnProduct from "./pages/returnProduct";
const App: React.FC = () => {
  const handleChange = () => {
    let a;
  };
  return (
    <>
      <div className="container">
        <Header />
        <NavbarLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-products" element={<New />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/return-product" element={<ReturnProduct />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
