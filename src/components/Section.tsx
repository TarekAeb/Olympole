import React from "react";
import Button from "./Button";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";

interface SectionProps {
    title: string;
    text: string[];
    image: string;
    align?: "left" | "right";
    link: string;
}

const Section: React.FC<SectionProps> = ({ title, text, image, align, link }) => {
    const titleChars = splitStringUsingRegex(title);
    const textChars: string[][] = text.map((t) => splitStringUsingRegex(t));

    return (
        <section className={`p-8 w-full flex flex-col items-center gap-8 md:justify-around md:items-center ${align === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>

            {/* Container without hover effect */}
            <div className="md:max-w-[50%] rounded-xl overflow-hidden shadow-lg w-80 h-[400px] md:w-96 md:h-[400px]">
                {/* Image with hover effect only on the image itself */}
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full rounded-xl object-cover object-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
            </div>

            {/* Text Section */}
            <motion.div
                className="flex flex-col items-center gap-4 md:max-w-[400px] text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold">
                    {titleChars.map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.05, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h2>

                {textChars.map((t, textIndex) => (
                    <p key={textIndex} className="text-lg">
                        {t.map((char, charIndex) => (
                            <motion.span
                                key={`${textIndex}-${charIndex}`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.05, delay: charIndex * 0.05 }}
                                viewport={{ once: true }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </p>
                ))}

                <a href={link}>
                    <Button text="Register Now!" />
                </a>
            </motion.div>
        </section>
    );
};

export default Section;
