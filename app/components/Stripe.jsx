"use client";

import { motion } from "framer-motion";



export default function Stripe() {
    const items = [
        "JUNIOR SOFTWARE DEVELOPER FROM JODHPUR, RAJASTHAN INDIA *"
    ];
    const items2 = [
        "LET'S WORK TOGETHER.",
        "I'M OPEN FOR WORK NEW PROJECTS *"
    ];
    const loopItems = [...items, ...items];
    const loopItems2 = [...items2, ...items2];

    return (
        <div className="overflow-hidden w-full bg-[#f2f9fd] py-5">
            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                }}
            >
                {loopItems.map((item, i) => (
                    <div
                        key={i}
                        className="px-8 text-8xl font-bold font-medium text-gray-800 whitespace-nowrap"
                    >

                        {item}
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex w-max pt-5"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                }}
            >
                {loopItems2.map((item, i) => (
                    <div
                        key={i}
                        className="px-8 text-8xl font-bold text-[#f2f9fd] font-medium whitespace-nowrap  text-shadow-[0px_0px_7px_black] "
                    >

                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}