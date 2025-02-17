import React from 'react';
import { motion } from 'framer-motion';

const Indicator = ({ isVisible, position }) => {
    return (
        <motion.div
            className="border-r-4 border-white h-8 absolute pl-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: position }}
        />
    );
};

const Sidebar = ({ currentIndex, setCurrentIndex }) => {
    const positions = ["6px", "54px", "102px", "150px", "200px"];

    return (
        <div className="flex h-full font-source-sans">
            <div className="flex flex-col items-center justify-center text-[#edf6fc]">
                <p
                    className="my-3 cursor-pointer"
                    onClick={() => {
                        setCurrentIndex(0);
                    }}
                    style={{ position: 'relative', zIndex: 10 }}
                >1</p>
                <p
                    className="my-3 cursor-pointer"
                    onClick={() => {
                        setCurrentIndex(1);
                    }}
                    style={{ position: 'relative', zIndex: 10 }}
                >2</p>
                <p
                    className="my-3 cursor-pointer"
                    onClick={() => {
                        setCurrentIndex(2);
                    }}
                    style={{ position: 'relative', zIndex: 10 }}
                >3</p>
                <p
                    className="my-3 cursor-pointer"
                    onClick={() => {
                        setCurrentIndex(3);
                    }}
                    style={{ position: 'relative', zIndex: 10 }}
                >4</p>
                <p
                    className="my-3 cursor-pointer"
                    onClick={() => {
                        setCurrentIndex(4);
                    }}
                    style={{ position: 'relative', zIndex: 10 }}
                >5</p>
            </div>
            {positions.map((pos, index) => (
                <Indicator key={index} isVisible={currentIndex === index} position={pos} />
            ))}
            <div className="text-slate-300 h-full border-r-4 border-slate-50 opacity-20 pl-2" />
        </div>
    );
};

export default Sidebar;
