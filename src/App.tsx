import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import NavbarLinks from './components/navLinks'
import PageRender from './customRouter'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <NavbarLinks />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:page' element={<PageRender />} />
          <Route path='/:page/:id' element={<PageRender />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
