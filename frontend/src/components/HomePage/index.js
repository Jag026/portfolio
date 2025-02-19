import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from "./Intro";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import ScrollBar from "./ScrollBar";
import ChatBot from "./ChatBot";

const sections = [Intro, About, Skills, Portfolio, Contact];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [hideChat, setHideChat] = useState(true);

    const handleScroll = useCallback((event) => {
        if (isScrolling) return; // Prevent multiple triggers

        setIsScrolling(true);

        if (event.deltaY > 16 && currentIndex < sections.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (event.deltaY < -16 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }

        setTimeout(() => setIsScrolling(false), 300); // Prevent spam scrolling
    }, [currentIndex, isScrolling]);

    useEffect(() => {
        setTimeout(() => {
            if (hideChat) {
                setHideChat(false);
            }
        }, 5000)
    }, [])

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [handleScroll]);

    return (
        <div className="h-screen w-screen bg-[#121212] overflow-hidden relative">
            <NavBar setCurrentIndex={setCurrentIndex} />
            <div className="w-full flex">
                <div className="w-[96%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="absolute h-full"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1, transition: { duration: 1, ease: [0.3, 1, 0.5, 1] } }}
                            exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.3, 1, 0.5, 1] } }}
                        >
                            {React.createElement(sections[currentIndex], {setCurrentIndex} )}
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="w-[3%] mt-24">
                    <ScrollBar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                </div>
                <div className="absolute bottom-0 right-32 z-100">
                    <p
                        className="text-[#edf6fc] hover:cursor-pointer"
                        onClick={() => setHideChat(!hideChat)}
                    >
                        {hideChat ?
                            <div className="font-source-sans animate-pulse w-[380px] h-12 bg-gray-800 mr-2 flex justify-center items-center rounded-md">
                                <p>Chat with Drew's AI assistant</p>
                            </div> : "Close X"}
                    </p>

                    <AnimatePresence>
                        {!hideChat && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: 20, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <ChatBot />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
