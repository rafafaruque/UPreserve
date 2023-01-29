import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import Image from "../assets/kurz.png";
import Leaderboard from "../components/Leaderboard";

function Home() {
    return (
        <div 
            className="home" 
            style={{
                backgroundImage: `url(${Image})`,
                backgroundAttachment: "scroll",
                overflow: "auto",
                height: "150vh", }}
            >

            <div className="headerContainer">
                <h1> UPreserve </h1>
                <p> Unleash your impact - transform your community </p>
                <Link to="/news">
                    <button> Learn More </button>
                </Link> 
                <br />
                <br />
                <br />
                <div className="desc">
                UPreserve is an application meant to motivate students to participate and attend in more activities and events that promote civic engagement, and in turn get rewards and gain spots on a leaderboard to see how their peers are doing. The application includes a news tab with up to date information on local and global current events, and also a community tab in which they can engage with other students to talk and share ideas. 
                </div>


        
            </div>
            
        </div>
    );
}

export default Home;