import React from 'react'
import { FaPaw, FaComment, FaShareSquare } from "react-icons/fa";

const Buttons = () => {
    return (
        <div className='buttons-container'>
            <div className='button-react'>
                <button>
                    <FaPaw />
                </button>
            </div>
            <div className='button-comment'>
                <button>
                    <FaComment />
                </button>
            </div>
            <div className='button-share'>
                <button>
                    <FaShareSquare />
                </button>
            </div>
        </div>
    )
}

export default Buttons