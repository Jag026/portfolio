import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Intro from "./Intro";
import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const sections = [Intro, About, Skills, Portfolio, Contact];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = useCallback((event) => {
        if (isScrolling) return; // Prevent multiple triggers

        setIsScrolling(true);

        if (event.deltaY > 18 && currentIndex < sections.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else if (event.deltaY < -18 && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }

        setTimeout(() => setIsScrolling(false), 400); // Prevent spam scrolling
    }, [currentIndex, isScrolling]);

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => window.removeEventListener("wheel", handleScroll);
    }, [handleScroll]);

    return (
        <div className="h-screen w-screen bg-[#121212] overflow-hidden relative">
            <NavBar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute w-full h-full"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1, transition: { duration: 1, ease: [0.3, 1, 0.5, 1] } }}
                    exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.3, 1, 0.5, 1] } }}
                >
                    {React.createElement(sections[currentIndex])}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HomePage;
