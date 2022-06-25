import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  FormControl,
  Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as FavoriteProduct } from '../../assets/favorite.svg'
import { ReactComponent as Cart } from '../../assets/cart.svg'
import { ReactComponent as MyProfiel } from '../../assets/myprofile.svg'
import { ReactComponent as Search } from '../../assets/search.svg'

function Header() {
  const expand = 'xl'
  return (
    <>
      <Navbar
        bg='light'
        expand={expand}
        className='mb-3 d-flex justify-content-between w-100'
      >
        <Container fluid>
          <Link to={'/'} className='decaration-none w-25'>
            <Navbar.Brand className='d-flex align-items-center'>
              <Logo className='logo' />
              <div>
                <h5 id={`offcanvasNavbarLabel-expand-${expand}`}>TEPLODOM</h5>
                <p id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Интернет магазин <br /> строй материалов
                </p>
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvas-start`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement='start'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                меню
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='w-100 d-flex justify-content-between'>
              <label className='d-none d-xl-flex justify-content-center align-item-center w-60'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2 custom-input'
                  aria-label='Search'
                />
              </label>
              <Nav className='w-35 d-none d-xl-flex justify-content-between'>
                <Link to={'/'} className='btn position-relative custom-btn'>
                  <FavoriteProduct />
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    99+
                    <span className='visually-hidden'>unread messages</span>
                  </span>
                </Link>
                <Link to={'/'} className='btn position-relative custom-btn'>
                  <Cart />
                  <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                    99+
                    <span className='visually-hidden'>unread messages</span>
                  </span>
                </Link>
                <Link
                  to={'/'}
                  className='bg-white my-profile-btn position-relative d-flex justify-content-center align-items-center decaration-none'
                >
                  <MyProfiel />
                  Профиль
                </Link>
              </Nav>
              <Nav className='d-flex  d-xl-none justify-content-start flex-grow-1 pe-3 '>
                <Link to={'/'} className='decaration-none'>
                  <Button>Товары по акции</Button>
                </Link>
                <Link to={'/'} className='decaration-none'>
                  <Button>Новинки</Button>
                </Link>
                <Link to={'/'} className='decaration-none'>
                  <Button>Поставщикам</Button>
                </Link>
                <Link to={'/'} className='decaration-none'>
                  <Button>Контакты</Button>
                </Link>
                <Link to={'/'} className='decaration-none'>
                  <Button>Возврат товара</Button>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
