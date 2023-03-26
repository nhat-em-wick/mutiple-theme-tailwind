import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navItems = [
    {
      path: '/',
      icon: <i className='bx bx-home-alt'></i>,
      name: 'Home'
    },
    {
      path: '/about',
      icon: <i className='bx bx-search'></i>,
      name: 'About'
    }
  ]
  return (
    <nav className='fixed bottom-5 w-screen flex justify-center items-center gap-x-8'>
      {navItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => (isActive ? 'active-state' : 'inactive-state')}
        >
          <span className='text-4xl leading-non'>{item.icon}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
