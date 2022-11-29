//icons
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardReturn } from "react-icons/md";
import { IoIosAddCircle } from 'react-icons/io'

import { useNavigate } from "react-router-dom";

const BottomNav = () => {
    const navigate = useNavigate('')

    return (
        <div className="d-flex justify-content-evenly bg-light m-0 p-2 rounded">
            {/* navigation to news-feed  */}
            <AiFillHome onClick={() => navigate('/news-feed')} size={40} cursor = "grab"/>
            {/* navigation to add-post if add post component is already available*/}
            <IoIosAddCircle onClick={() => navigate('/news-feed')} size={40}  cursor = "grab"/>
            {/* return button */}
            <MdKeyboardReturn onClick={() => navigate(-1)} size={40}  cursor = "grab"/>
        </div>
    );
};

export default BottomNav;
