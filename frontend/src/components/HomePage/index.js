import React from 'react';
import './index.css';
import Intro from "./Intro";
import NavBar from "./NavBar";
const HomePage = () => {

    return (
        <div className="h-full w-screen bg-[#121212]">
            <NavBar/>
            <Intro/>
        </div>
    );
}

export default HomePage;
