import { FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-4 p-8 bg-[#2E368F] text-white">

            <motion.h1
                className="text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Ensia Sport & Culture club
            </motion.h1>

            <div className="flex gap-4 text-xl">
                <motion.a
                    href="https://www.instagram.com/ensia.sport.culture.club/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaInstagram />
                </motion.a>
                <motion.a
                    href="https://discord.gg/pvwhyGBf6s"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaDiscord />
                </motion.a>
                <motion.a
                    href="mailto:escc@ensia.edu.dz"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                >
                    <FaEnvelope />
                </motion.a>
            </div>

            <motion.p
                className="text-center my-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
            >
                Join our club where sports, intellect, and culture come together!
            </motion.p>

            <motion.div
                className="h-[2px] w-[90%] bg-white rounded-2xl my-4"
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            />
        </footer>
    );
};

export default Footer;
