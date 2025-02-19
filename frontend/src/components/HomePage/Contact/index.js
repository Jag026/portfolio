import React from 'react';
import launchVideo from '../../videos/blast-off_1.mov';
import FallingText from "../FallingText";

const Contact = () => {

    return (
        <div className="h-screen bg-black mt-8">
            <div className="w-full flex items-center justify-center pt-32 px-32">
                <div className="w-full grid grid-cols-2 gap-6">
                    <div className="col-start-1 w-full px-4">
                        <video
                            className="shadow-lg w-108"
                            src={launchVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                    <div className="col-start-2 text-[#edf6fc] font-source-sans">
                        <div className="flex flex-col text-[#edf6fc] justify-center items-start w-[400px]">
                            <h2 className="text-5xl font-bold">Ready To Launch?</h2>
                            <p className="py-4 text-xl">Whether you're in need of a developer or a tester, I have the skills to get the job done right.</p>
                            <p className="py-4 text-xl">Drop me a line:</p>
                            <div onClick={() =>window.open('mailto:drew.griffin.dev@gmail.com', '_blank', 'noopener,noreferrer')}>
                                <FallingText text="drew.griffin.dev@gmail.com" size="4xl" font="source-sans" cursor="cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
