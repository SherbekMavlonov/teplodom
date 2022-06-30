import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
