import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavLinks = ({ orientation = 'horizontal' , closeMenu }) => {

  const [activeLink, setActiveLink] = useState('Home')
  const links =[
    { link: 'Home', url: '/' },
    { link: 'Courses', url: '/Courses' },
    { link: 'Faculty', url: '/Faculty' },
    { link: 'Gallery', url: '/Gallery' },
    { link: 'Contact', url: '/Contact' },
    { link: 'Career', url: '/Career' }
  ]

  const navigate = useNavigate()

  const handleLinkClick = (item) => {
    setActiveLink(item?.link)
    navigate(item?.url)
    if (closeMenu) {
      closeMenu(false)
    }
  }
  return (
    <>
      {links.map((item,index) => (
        <div
          onClick={() =>handleLinkClick(item)}
        >
          <span
            key={index} 
            className={`text-gray-600 hover:text-indigo-600 pointer  ${
              activeLink == item?.link
                ? 'text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]'
                : 'text-gray-600'
            }  font-medium transition duration-150 ease-in-out
              ${orientation === 'vertical' ? 'block py-2' : ''}`}
          >
            {item?.link}
          </span>
        </div>
      ))}
    </>
  )
}

export default NavLinks
