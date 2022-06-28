import Footer from './components/footer'
import Product from './components/product'
import CategoryCard from './components/category'
import Portfolio from './components/portfolio'

import React from 'react'
import CustomCarousel from './components/carousel'
import Header from './components/header'

const App: React.FC = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <CustomCarousel />
        <div className='row my-5'>
          <div className='col-3 '>
            <Product />
          </div>
          <div className='col-3 '>
            <Product />
          </div>
          <div className='col-3 '>
            <Product />
          </div>
          <div className='col-3 '>
            <Product />
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <CategoryCard />
          </div>
        </div>
        <Portfolio />
      </div>
      <Footer />
    </>
  )
}

export default App
