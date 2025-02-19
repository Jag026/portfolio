import React from 'react';

const NavBar = ({ setCurrentIndex }) => {
    return(
        <div className="flex w-full h-20 font-source-sans pt-12 pl-14">
            <div className="flex w-[90%]">
                <div className="text-3xl font-bold flex items-center justify-center text-black bg-white h-8 w-10">
                    <p>></p>
                    <p className="animate-pulse">_</p>
                </div>
                <div className="pl-14 text-3xl font-bold flex items-center justify-center text-black h-8 w-12">
                    <p className="text-white pl-1">Drew.G</p>
                </div>
            </div>
            <div onClick={() => setCurrentIndex(4)} className="text-white pr-4 ">
                <button className="hover:bg-purple-300 cursor-pointer text-md font-bold border border-2 border-white w-32 h-12 rounded-md">Contact</button>
            </div>

        </div>
    )
}

export default NavBar;
