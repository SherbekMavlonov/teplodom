import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Product from './components/product'
import CategoryCard from "./components/category"
import Portfolio from './components/portfolio'

const App: React.FC = () => {
  return (
    <>
    <div className="container">
        <Header /> 
        <div className="row my-5">
          <div className="col-3 px-3">
            <Product/>
          </div>
          <div className="col-3 px-3">
            <Product/>
          </div>
          <div className="col-3 px-3">
            <Product/>
          </div>
          <div className="col-3 px-3">
            <Product/>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <CategoryCard/>
          </div>
        </div>
        <Portfolio/>
    </div>

      <Footer/>  
    </>
  
  )
}

export default App
