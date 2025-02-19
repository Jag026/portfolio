import React from 'react';
import coverPhoto from "../../../images/cover-photo1.png";

const About = ( {setCurrentIndex}) => {

    return (
        <div className="h-screen w-full flex flex-col items-center mt-24 pl-4 font-source-sans text-[#edf6fc]">
            <div className="grid grid-col-2 text-[#edf6fc]">
                <div className="col-start-1 flex flex-col justify-center items-start font-source-sans pl-4">
                    <p className="font-bold text-6xl">Hi, I'm Drew,</p>
                    <p className="font-bold text-6xl">Developer And</p>
                    <p className="font-bold text-6xl">Automated Tester</p>
                    <div className="rounded-b-xl pl-24">
                        <img className="rounded-[100px]" src={coverPhoto} />
                    </div>
                    <p className="mt-6">Full-stack development / Automated Testing</p>
                </div>
                <div className="w-[600px] ml-24 col-start-2 flex flex-col justify-center items-start text-xl">
                    <p className="py-4">Professional Full-stack Developer and Automated Tester.</p>
                    <p>Problem solver, well-organised, loyal employee with high attention to detail.
                        Fan of sports, reading books, and web development.</p>
                    <p className="py-4">I love building things that people find useful.</p>
                    <p>I also specialize in Wordpress development and DNS management.</p>
                    <p onClick={() => setCurrentIndex(3)} className="hover:text-purple-400 mt-6 cursor-pointer">See all skills ></p>
                </div>
            </div>
        </div>
    )
}

export default About;
