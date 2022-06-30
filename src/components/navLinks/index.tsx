import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {
    title: 'Товары по акции',
    link: '/',
  },
  {
    title: 'Новинки',
    link: '/new-products',
  },
  {
    title: 'Поставщикам',
    link: '/delivery',
  },
  {
    title: 'Контакты',
    link: '/contact-us',
  },
  {
    title: 'Возврат товара',
    link: '/return-product',
  },
]

const NavbarLinks = () => {
  return (
    <div className='d-flex justify-content-between my-4'>
      {links.map((item, index) => (
        <NavLink
          to={item.link}
          key={index}
          className={`navbar-item ${(state: { isActive: boolean }) =>
            state.isActive ? 'active' : ''}`}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  )
}

export default NavbarLinks
