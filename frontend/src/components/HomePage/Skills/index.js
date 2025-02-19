import React from 'react';
import SkillListing from "./SkillListing";

const Skills = () => {

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col justify-center items-center text-[#edf6fc] font-source-sans pl-4">
                <p className="font-bold text-6xl pt-4">Skills And Experience</p>
                <div className="w-[800px] pt-2">
                    <p>I have strong customer service skills with several years of experience onboarding customers and assisting them with troubleshooting. Additionally, I have expertise in ORMs like Sequelize and Propel, QA testing, load testing with JMeter, and working with payment APIs like Stripe and NMI.
                    </p>
                </div>
                <p className="pt-4 pb-16">Visit my Linkedin for more details.</p>
                <SkillListing />
            </div>
        </div>
    )
}

export default Skills;
