import { IconContext } from 'react-icons'
import '../../images/PetLy-logo-primary.png'

import { Link } from 'react-router-dom'
import React, { useState } from 'react'

import  SidebarData from './SidebarData'
import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState (false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <nav className="nav-menu ">
                {/* Website logo and name */}
                <div className='petly-title'>
                    <img className='logo' src={require("../../images/PetLy-logo-primary.png")}/>
                </div>
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