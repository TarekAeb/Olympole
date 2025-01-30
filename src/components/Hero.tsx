import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';

const Hero: React.FC = () => {
    const titleChars = splitStringUsingRegex("Meet us on Olympole!");

    return (
        <section className="w-full flex flex-col items-center p-10 gap-5 md:pt-20 md:gap-10">
            <img src="src/assets/olympole logo.svg" alt="Olympole Logo" className="w-40" />
            <h1 className="text-3xl text-center font-semibold mt-5">
                {titleChars.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
            <div className="text-center mt-5 text-lg md:font-medium md:text-2xl">
                {[
                    "Get ready for an exciting month of fun and competition!",
                    "Join us in a series of sports tournaments and cultural events.",
                    "Featuring individual and collective activities, taking place at the pole."
                ].map((text, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {text}
                    </motion.p>
                ))}
            </div>
            <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                href='#activities'
            >
                <Button text="Explore Activities!" />
            </motion.a>
        </section>
    );
};

export default Hero;
