import React from 'react';
import typeScriptIcon from '../../../../images/typescript-logo.png'
import javaScriptIcon from  '../../../../images/js-icon.png';
import reactIcon from '../../../../images/react-icon.png';
import nodeIcon from '../../../../images/nodejs.png';
import gitIcon from '../../../../images/git-icon.png';
import testCafeIcon from '../../../../images/testcafe-icon.png';
import mysqlIcon from '../../../../images/mysql-icon.png';
import awsIcon from '../../../../images/aws-icon.png';
import psqlIcon from '../../../../images/psql-icon.png';
import angularIcon from '../../../../images/angular-icon.png';
import jiraIcon from '../../../../images/jira-icon.png';
import htmlIcon from '../../../../images/html-5-icon.png';
import phpIcon from '../../../../images/php-icon.png';
import wordpressIcon from '../../../../images/wordpress-logo.png';
import rockstarIcon from '../../../../images/rockstar-icon.png';

const SkillListing = () => {

    return(
        <div>
            <div className="flex">
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={typeScriptIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">JavaScript</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={reactIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">React</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={nodeIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">Node.js</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={mysqlIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">MySQL</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={gitIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">Git</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={testCafeIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">Testcafe Studio</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={awsIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">AWS</p>
                </div>
            </div>

            <div className="flex mt-8">
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={psqlIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">PostgresSQL</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={angularIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">Angular</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={jiraIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">Jira</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={htmlIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">HTML5</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={phpIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">PHP</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={wordpressIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">WordPress</p>
                </div>
                <div className="px-8 flex flex-col items-center justify-center">
                    <img className="h-20" src={rockstarIcon} />
                    <p className="pt-1 font-source-sans text-[#edf6fc]">Rock Start Employee</p>
                </div>
            </div>
        </div>
    )
}

export default SkillListing;
