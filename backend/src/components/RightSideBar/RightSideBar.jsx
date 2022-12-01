import "./RightSideBar.css";
import Avatar from "@mui/material/Avatar";
import React from "react";

import * as AiIcons from "react-icons/ai";

const sampleData = [
    { name: "Blacky"},
    { name: "Whity"},
    { name: "Browny"},
    { name: "Kopiko Browny"},
    { name: "Milkita fish"},
    { name: "Bugs Browny"},
    { name: "Malu Pet"},
    { name: "Philippine rabbit"},
    { name: "Shiro"},
    { name: "Tea Lapia"},
    { name: "Sample_User_1"},
    { name: "Sample_User_2"},
];

function RightSideBar() {
    return (
        <div className="rightside-bar">
            <p className="title h6 text-center pt-5"> Friend Suggestions </p>
            {/* sample contents */}
            <div className="suggestions p-5">
                {sampleData.map((item) => {
                    return (
                        <p className="p-1">
                            {item.name} &nbsp;
                            <AiIcons.AiFillPlusCircle/>
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default RightSideBar;
