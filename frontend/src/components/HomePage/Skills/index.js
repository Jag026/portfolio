import React from 'react';
import SkillListing from "./SkillListing";

const Skills = () => {

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col justify-center items-center text-[#edf6fc] font-source-sans pl-4">
                <p className="text-slate-300">Expert Tester, Developer, and Customer Success Engineer</p>
                <p className="font-bold text-6xl pt-4">Skills And Experience</p>
                <p className="pt-4">The main area of expertise is front end development (client side of the web).</p>
                <div className="w-[800px] pt-2">
                    <p>HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</p>
                </div>
                <p className="pt-4 pb-16">Visit my Linkedin for more details.</p>
                <SkillListing />
            </div>
        </div>
    )
}

export default Skills;
