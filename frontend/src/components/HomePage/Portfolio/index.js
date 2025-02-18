import React from 'react';
import Projects from "./Projects";

const Portfolio = () => {

    return(
        <div className="h-screen w-screen mt-0 md:mt-[-12px] ">
            <div className="mt-24 text-[#edf6fc] flex flex-col justify-center items-center font-source-sans">
                <p className="font-bold text-6xl">Portfolio and Projects</p>
                <div className="w-[400px] mt-4 flex flex-col justify-center items-center">
                    <p className="text-center">I love programming and I love building things! Please contact me if you would like to learn more or have an idea in mind.</p>
                </div>
            </div>
            <div className="px-24">
                <Projects />
            </div>
        </div>
    )
}

export default Portfolio;
