import React from 'react';
import './index.css';
import developerDesk from  '../../../images/developer-desk.png';
const Intro = () => {

    return(
        <div className="h-screen">
            <div className="grid grid-col-2">
                <div className="w-[70%] text-[#edf6fc] text-white col-start-1 flex flex-col justify-center items-start font-source-sans pl-4">
                    <p className="font-bold text-6xl">Automation Test Engineer</p>
                    <p className="text-xl pt-2">Full stack development, test design and execution, resolving critical bugs</p>
                    <p className="mt-6">About Me ></p>
                </div>
                <div className="col-start-2 flex justify-center items-center">
                    <img className="w-[500px]" src={developerDesk} />
                </div>
            </div>
        </div>
    )
}

export default Intro;
