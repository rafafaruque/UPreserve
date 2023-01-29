import React from 'react'
import { Link } from 'react-router-dom';
// import Article1 from "https://www.texasdisposal.com/blog/the-real-cost-of-littering/";
// import Article2 from "https://www.bbc.com/news/science-environment-57436143";
import Pic1 from "../assets/feet.png";
import Pic2 from "../assets/TRASH.png"
import Pic3 from "../assets/cigs.png"
import Pic4 from "../assets/recs.png"
import Image from "../assets/sunset.jpg"

function News() {
  return (
    <div className="news" 
    style={{
        backgroundImage: `url(${Image})`,
        backgroundAttachment: "scroll",
        overflow: "auto",
        height: "150vh", }}>
        <h1> Click on the pictures to learn more about supporting your community!</h1>
        <Link to="https://www.texasdisposal.com/blog/the-real-cost-of-littering/">
        <img src={Pic1} alt="Go to About" height="200" width="300"/>
        </Link>
        
        <br />

        <Link to="https://www.bbc.com/news/science-environment-57436143">
        <img src={Pic2} alt="Go to About" height="200" width="300"/>
        </Link>
        <br />

        <Link to="https://www.bloomberg.com/news/articles/2022-02-16/how-to-prevent-littering-according-to-researchers">
        <img src={Pic3} alt="Go to About" height="200" width="300"/>
        </Link>
        <br />

        <Link to="https://www.nytimes.com/2021/01/27/arts/design/recycling-packaging-new-york.html">
        <img src={Pic4} alt="Go to About" height="200" width="300"/>
        </Link>
        <br />


    </div>
  )
}

export default News