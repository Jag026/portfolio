import React from 'react';
import developerDesk from  '../../../images/developer-desk.png';
const Intro = () => {

    return(
        <div className="h-screen">
            <div className="grid grid-col-2">
                <div className="w-[70%] text-[#edf6fc] col-start-1 flex flex-col justify-center items-start font-source-sans pl-4">
                    <p className="font-bold text-6xl">Automation Test Engineer</p>
                    <p className="text-xl w-[600px] mt-8 font-thin opacity-80">Designing automated tests, full-stack development, QA and load testing. Reporting and resolving critical bugs.</p>
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
