import React from 'react'
import { RiLogoutBoxRFill } from "react-icons/ri";

const NewsFeedHeader = () => {
    return (
        <div className='newsfeed-header-container'>
            <div className='newsfeed-logo'>
                <img
                    className='logo'
                    src=''
                    alt='logo'>
                </img>
            </div>
            <div className='newsfeed-logout'>
                <button>
                    <RiLogoutBoxRFill />
                </button>
            </div>
        </div>
    )
}

export default NewsFeedHeader