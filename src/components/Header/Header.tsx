import React from 'react'

import './header.scss'

export const Header: React.FC = () => {
  return (
    <header className='header'>
        <div className="header__logo-wrapper">
            <span className='header__logo'> House Staff</span>
        </div>
        <div className="header__banner"></div>
    </header>
  )
}
