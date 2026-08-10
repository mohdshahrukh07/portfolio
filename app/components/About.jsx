"use client"
import aboutImage from "@/public/assets/aboutImg.jpeg"
import cvDownload from "@/public/assets/cv-download.webp"
import downloadBg from "@/public/assets/download-bg.webp"
import { motion, useMotionValue } from "framer-motion"
import { style } from "framer-motion/client"
import Image from "next/image"
export default function About() {

    const slideLeft = {
        hidden: {
            opacity: 0,
            x: -100,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            x: -100,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                delay: 0.8,
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        rotateX.set((y - centerY) / 30);
        rotateY.set(-(x - centerX) / 30);
    };

    const reset = () => {
        rotateX.set(0);
        rotateY.set(0);
    };
    return (
        <div className="w-full h-auto flex justify-center items-center  bg-[#f2f9fd] p-2 py-5 pt-10 pb-10">

            <div className=" w-full max-w-7xl h-auto flex justify-center items-center py-2 mt-4
                max-sm:flex-col">
                <div className="w-[45%] flex justify-center items-center h-full 
                    max-sm:w-full">
                    <div className="w-[85%] relative isolate">
                        <div style={{ perspective: 1000 }}>
                            <motion.div
                                onMouseMove={handleMouseMove}
                                onMouseLeave={reset}
                                variants={slideLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                style={{
                                    rotateX: rotateX, rotateY: rotateY, transformStyle: "preserve-3d",
                                    transition: "transform 0.2s ease-out"
                                }}
                            >
                                <Image
                                    src={aboutImage}
                                    // height={400}
                                    // width={200}
                                    alt=""
                                    className=" rounded-2xl w-full"
                                />
                            </motion.div>
                        </div>
                        <motion.div variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute top-30 -right-7 h-0 w-0
                                    border-t-[55px]
                                    border-r-[65px]
                                    border-b-[55px]
                                    border-t-transparent
                                    border-b-transparent
                                    border-r-[#f2f9fd]">
                        </motion.div>
                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute top-20 -left-15 w-23 h-23 bg-[#80db66]"></motion.div>
                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute -bottom-8 right-15 w-12 h-18 bg-[#80db66]"></motion.div>
                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="-z-10 absolute -top-7 -right-7 w-30 h-30 border-4 border-[#80db66]"></motion.div>
                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute -bottom-30 -left-30">
                            <div className="relative w-[250px] h-[250px]">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <Image
                                        src={downloadBg}
                                        width={270}
                                        height={270}
                                        alt=""
                                        className="w-full h-full"
                                    />
                                </motion.div>

                                <Image
                                    src={cvDownload}
                                    width={30}
                                    height={30}
                                    alt=""
                                    className="absolute top-1/2 left-1/2 -translate-1/2"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="w-[55%] h-full  px-3
                                max-sm:w-full">
                    <div className="pl-5 m-5 max-sm:m-0 max-sm:px-0">
                        <h3 className="text-xl text-[#80db66] tracking-[0.25em] font-normal">ABOUT ME</h3>
                        <h1 className="text-6xl text-gray-800 font-medium py-4
                                max-sm:text-3xl">I Develop System that Works</h1>
                        <p className="text-[#4d4d75] mt-4 text-xl font-normal">
                            I build reliable and scalable systems using Laravel REST APIs, MySQL, Node.js, and Python. My focus is on creating clean, secure, and high-performance backend solutions that are easy to maintain and built for real-world applications.
                            <span className="mt-6 block">
                                Turning ideas into efficient, scalable, and future-ready digital solutions.
                            </span>
                        </p>
                        <hr className="border-t-[1px] border-[#b7b7c5] mt-6" />
                        <div className="grid grid-cols-2 gap-10 mt-6
                                max-sm:grid-cols-1 max-sm:gap-2">
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="w-82 flex justify-start items-center gap-2">
                                    <div className="w-28 text-lg text-gray-800 font-medium">Name</div>
                                    <span className="text-[#4d4d75] text-lg font-normal">Mohd Shahrukh</span>
                                </div>
                                <div className="w-82 flex justify-start items-center gap-2">
                                    <div className="w-28 text-lg text-gray-800 font-medium">Age</div>
                                    <span className="text-[#4d4d75] text-lg font-normal">25 Years</span>
                                </div>
                                <div className="w-82 flex justify-start items-center gap-2">
                                    <div className="w-28 text-lg text-gray-800 font-medium">Email</div>
                                     <span className="min-w-0 flex-1 text-[#4d4d75] text-lg font-normal">mohd800021@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <div className="w-82 flex justify-start items-center gap-2">
                                    <div className="w-28 text-lg text-gray-800 font-medium">Occupation</div>
                                    <span className="text-[#4d4d75] text-lg font-normal">Software Developer</span>
                                </div>
                                <div className="w-82 flex justify-start items-center gap-2">
                                    <div className="w-28 text-lg text-gray-800 font-medium">Nationality</div>
                                    <span className="text-[#4d4d75] text-lg font-normal">Indian</span>
                                </div>
                                <div className="w-82 flex justify-start items-center gap-2">
                                    <div className="w-28 text-lg text-gray-800 font-medium">Address</div>
                                    <span className="text-[#4d4d75] text-lg font-normal">Jodhpur, Rajasthan</span>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t-[1px] border-[#b7b7c5] mt-6" />
                        
                        <div className="w-full flex text-xl items-center text-gray-800 gap-5 mt-6">
                            SKILLS:
                            <div className="flex justify-start items-center gap-2 mt-2 flex-wrap">
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">React JS</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Next JS</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Tailwind CSS</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">JavaScript</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Python</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Laravel</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">MySQL</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Git</span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Express JS</span>

                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">Node JS</span>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}