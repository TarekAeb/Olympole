import { motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
    {
        question: "Can I participate as an organizer in this event?",
        answer: (
            <>
                Yes! You can apply as an organizer by filling out{" "}
                <a href="https://forms.gle/di5chhdAZFQW4wiHA" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-semibold">
                    this form
                </a>.
            </>
        ),
    },
    {
        question: "Can I participate in multiple activities?",
        answer: "Yes, you can participate in as many activities as you like!",
    },
    {
        question: "Does each member of collective sport team  need to register?",
        answer: "No, only the team leader needs to register on behalf of the team.",
    },
    {
        question: "How can I find a team for collective sports?",
        answer: <>You can find teammates through our{" "}
            <a href="https://discord.gg/pvwhyGBf6s" target="_blank" rel="noopener noreffer" className="text-blue-500 underline font-semibold" >Discord server </a>
        </>,
    },
    {
        question: "Can I participate in the activities if I am not a student at ENSIA?",
        answer: "Yes, the event is open to all students from Abdelhafid Ihadaden pole.",
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-3xl mx-auto py-12 px-6  rounded-xl shadow-lg mb-12">
            <motion.h2
                className="text-4xl font-bold text-center text-[#2E368F] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#A3D390] rounded-lg shadow-md"
                    >
                        <button
                            className="w-full flex justify-between items-center text-lg font-medium p-4 bg-[#81B37D] text-white rounded-lg hover:bg-[#6D9F69] transition-all duration-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <motion.span
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <MdKeyboardArrowDown size={24} />
                            </motion.span>
                        </button>
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={openIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden p-4 rounded-b-lg text-gray-800"
                        >
                            {faq.answer}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
