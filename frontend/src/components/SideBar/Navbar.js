import { IconContext } from 'react-icons'

import { Link } from 'react-router-dom'

import React, { useState } from 'react'

/* only pure CSS was used here, no bootstrap */
import  SidebarData from './SidebarData'
import * as MdIcons from 'react-icons/md'

import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState (false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <nav className="nav-menu ">
                {/* Website logo and name */}
                < h1 className='petly-name' >  <MdIcons.MdPets/> PETLY </h1>
                {/* nav-menu */}
                <ul className='nav-menu-items' onClick={showSidebar}>
                    {SidebarData.map ((item, index) => {
                        return(
                            <li key={index} className = {item.cName}>
                                <Link to = {item.path}>
                                    {item.icon}
                                    <span> {item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )

}

export default Navbar