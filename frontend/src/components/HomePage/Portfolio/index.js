import React from 'react';
import Projects from "./Projects";

const Portfolio = ({ setCurrentIndex }) => {

    return(
        <div className="h-screen w-screen mt-0 md:mt-[-12px] ">
            <div className="mt-24 text-[#edf6fc] flex flex-col justify-center items-center font-source-sans">
                <p className="font-bold text-6xl">Portfolio and Projects</p>
                <div className="w-[400px] mt-4 flex justify-center items-center">
                    <p className="text-center">I love programming and I love building things! Please <a onClick={() => setCurrentIndex(4)} className="font-bold text-md hover:text-purple-300 hover:cursor-pointer">CONTACT ME</a> if you would like to learn more, or are in need of a developer. Or check out my
                        <a className="font-bold text-lg hover:text-purple-300 hover:cursor-pointer pt-2" href="https://github.com/jag026" target="_blank" rel="noopener noreferrer"> Github ></a></p>
                </div>
            </div>
            <div className="px-24">
                <Projects />
            </div>
        </div>
    )
}

export default Portfolio;
