import React from 'react';
import {Link} from 'react-router-dom';
import Image1 from "../assets/phone.jpg";
import { Button } from '@mui/material';
import "../styles/Community.css";
import Image from "../assets/astro.jpeg";

function Community() {
  return (
    <div className="news"
    style={{
        backgroundImage: `url(${Image})`,
        backgroundAttachment: "fixed",
        overflow: "auto",
        height: "150vh", }}>
        <h1>Meet others who value giving back to the community, increase student engagement, and win prizes along the way!</h1>
        <button>
        Join Now!
    </button>
    <br />
    <img src={Image1} alt="Go to About" height="600" width="300"/>
    </div>
  


  )
}

export default Community