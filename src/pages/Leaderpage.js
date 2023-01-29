import React from 'react';
import {Link} from 'react-router-dom';
import Leaderboard from "../components/Leaderboard";
import Image from "../assets/sunset.jpg";


function Leaderpage() {
    return (
        <div 
            className="home" 
            style={{
                backgroundImage: `url(${Image})`,
                backgroundAttachment: "scroll",
                overflow: "auto",
                height: "150vh", }}
            >
                <h1> Top Engagers Leaderboard Here!</h1>
            <Leaderboard/>
        </div>
    );
}

export default Leaderpage