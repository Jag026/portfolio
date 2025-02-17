import React from 'react';
import coverPhoto from "../../../images/cover-photo1.png";

const About = () => {

    return (
        <div className="h-screen w-full flex flex-col items-center mt-24 pl-4 font-source-sans text-[#edf6fc]">
            <div className="grid grid-col-2 text-[#edf6fc]">
                <div className="col-start-1 flex flex-col justify-center items-start font-source-sans pl-4">
                    <p className="font-bold text-6xl">Hi, I'm Drew,</p>
                    <p className="font-bold text-6xl">Automated Tester</p>
                    <p className="font-bold text-6xl">And Developer</p>
                    <div className="rounded-b-xl pl-24">
                        <img className="rounded-[100px]" src={coverPhoto} />
                    </div>
                    <p className="mt-6">Testing / Full-stack development / Customer Success</p>
                </div>
                <div className="w-[600px] ml-24 col-start-2 flex flex-col justify-center items-start text-xl">
                    <p className="py-4">Professional Application Tester and Web Developer.</p>
                    <p>Problem solver, well-organised person, loyal employee with high attention to detail.
                        Fan of sports, reading books, and web development.</p>
                    <p className="py-4">Interested in all things related to web development, including testing, resolving bugs, and building new features.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
