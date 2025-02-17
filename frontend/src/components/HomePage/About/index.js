import React from 'react';
import developerDesk from "../../../images/developer-desk.png";

const About = () => {

    return (
        <div className="h-screen">
            <div className="grid grid-col-2 text-[#edf6fc]">
                <div className="w-[70%] col-start-1 flex flex-col justify-center items-start font-source-sans pl-4">
                    <p className="font-bold text-6xl">Hi, I'm Drew,</p>
                    <p className="font-bold text-6xl">Automated Testing</p>
                    <p className="mt-6">Testing / Full-stack development / Customer Success</p>
                </div>
                <div className="col-start-2 flex flex-col justify-center items-center">
                    <p>I specialize in automated testing, QA testing, and Bugs</p>
                    <p>I specialize in automated testing, QA testing, and Bugs</p>
                    <p>I specialize in automated testing, QA testing, and Bugs</p>
                </div>
            </div>
        </div>
    )
}

export default About;
