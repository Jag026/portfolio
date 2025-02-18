import React from 'react';
import teachersAideVideo from '../../../videos/teachersaide-demo.mov';
import dataropersVideo from '../../../videos/dataropers-demo.mov';
import regressionVideo from '../../../videos/regression-demo.mov';
const Projects = () => {

    return(
        <div className="text-[#edf6fc] border border-[#edf6fc]">
            <div className="grid grid-cols-3">
                <div className="w-full col-start-1 col-span-1 border-r-2 flex flex-col justify-center items-center">
                    <h2 className="font-erbaum text-3xl">TeachersAIde.io</h2>
                    <p className="font-source-sans px-8 py-4">A cutting-edge application that leverages AI to generate lesson plans and tests for teachers.</p>
                    <div className="w-full px-4">
                        <video
                            className="shadow-lg"
                            src={teachersAideVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
                <div className="col-start-2 col-span-1 border-r-2 flex flex-col justify-center items-center py-4">
                    <h2 className="font-source-sans text-4xl">Regression Test Suite</h2>
                    <p className="font-amplitude px-8 pb-4 pt-2">A complete regression testing suite for new production feature deployment. Written in TypeScript and utilizes Testcafe Studio.</p>
                    <div className="w-full px-4">
                        <video
                            className="shadow-lg"
                            src={regressionVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
                <div className="col-start-3 col-span-1 flex flex-col justify-center items-center">
                    <h2 className="font-studd text-2xl pt-2">Dataropers.com</h2>
                    <p className="font-studd px-8 py-4 text-sm">A cutting-edge application that leverages AI to generate lesson plans and tests for teachers.</p>
                    <div className="w-full px-4 py-2">
                        <video
                            className="shadow-lg"
                            src={dataropersVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
