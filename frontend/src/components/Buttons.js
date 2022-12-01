import React from 'react'
import { FaPaw, FaComment, FaShareSquare } from "react-icons/fa";
import '../styles/ButtonsStyles.css';

const Buttons = () => {
    return (
        <div className='buttons-container'>
            <div className='button-react'>
                <button className='fapaw'>
                    <FaPaw />
                </button>
            </div>
            <div className='button-comment'>
                <button className='facomment'>
                    <FaComment />
                </button>
            </div>
            <div className='button-share'>
                <button className='fashare'>
                    <FaShareSquare />
                </button>
            </div>
        </div>
    )
}

export default Buttons