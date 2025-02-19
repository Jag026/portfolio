import React from 'react';
import { motion } from "framer-motion";

const FallingText = ({ text }) => {
    return (
        <div className="flex text-6xl font-bold font-source-sans">
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: 0, opacity: 1, color: "#edf6fc"}}
                    whileHover={{ y: 100, opacity: 0, color: "purple", transition: { duration: 1 } }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default FallingText;
