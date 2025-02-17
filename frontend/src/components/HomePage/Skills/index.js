import React from 'react';
import SkillListing from "./SkillListing";

const Skills = () => {

    return (
        <div className="h-screen">
            <div className="flex flex-col justify-center items-center font-source-sans pl-4">
                <p className="text-slate-300">Expert Test, Developer and Customer Success</p>
                <p className="font-bold text-6xl text-[#edf6fc]">Skills And Experience</p>
                <p>The main area of expertise is front end development (client side of the web).</p>
                <p>HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</p>
                <p>Visit my Linkedin for more details.</p>
                <SkillListing />
            </div>
        </div>
    )
}

export default Skills;
