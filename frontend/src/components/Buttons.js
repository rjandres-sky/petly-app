import React from 'react'
import { FaPaw, FaComment, FaShareSquare } from "react-icons/fa";

const Buttons = () => {
    return (
        <div className='buttons-container'>
            <button>
                <FaPaw />
            </button>
            <button>
                <FaComment />
            </button>
            <button>
                <FaShareSquare />
            </button>
        </div>
    )
}

export default Buttons