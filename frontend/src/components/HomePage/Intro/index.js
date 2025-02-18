import React from 'react';
import developerDesk from  '../../../images/developer-desk.png';
import FallingText from "../FallingText";
const Intro = ({ setCurrentIndex }) => {

    return(
        <div className="h-screen">
            <div className="grid grid-col-2 space-x-24">
                <div className="text-[#edf6fc] col-start-1 flex flex-col justify-center items-start font-source-sans pl-12">
                    <div className="flex space-x-2">
                        <FallingText text="Full-stack" />
                    </div>
                    <div className="flex space-x-2">
                        <FallingText text="Developer / " />
                        <FallingText text="Tester" />
                    </div>
                    <p className="text-xl w-[500px] mt-8 font-thin opacity-80">Full-stack development - Automated, QA, and load testing - Reporting and resolving critical bugs - Wordpress Specialist</p>
                    <p className="hover:text-purple-400 mt-6 cursor-pointer" onClick={() => setCurrentIndex(1)}>About Me ></p>
                </div>
                <div className="col-start-2">
                    <img className="w-[600px]" src={developerDesk} />
                </div>
            </div>
        </div>
    )
}

export default Intro;
