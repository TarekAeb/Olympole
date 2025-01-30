import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <motion.button
            className="bg-[#2E368F] text-white rounded-4xl px-10 py-2 mt-5 font-semibold transition-all cursor-pointer"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 15px rgba(46, 54, 143, 0.3)" }}
            whileTap={{ scale: 0.95 }}
        >
            {text}
        </motion.button>
    );
};

export default Button;
