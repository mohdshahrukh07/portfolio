"use client"
import educationImage from "@/public/assets/education-img.webp"
import cvDownload from "@/public/assets/cv-download.webp"
import downloadBg from "@/public/assets/download-bg.webp"
import { motion, useMotionValue } from "framer-motion"
import { style } from "framer-motion/client"
import Image from "next/image"
import EducationIcon from "./icons/educationIcon"
import BagIcon from "./icons/bagIcon"
import { useState } from "react"
export default function EducationPage() {

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const slideLeft = {
        hidden: {
            opacity: 0,
            x: 100,
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

            <div className=" w-full max-w-7xl h-auto flex justify-center items-start py-2 mt-4">
                <div className="w-[55%] h-full px-5">
                    <div className="">
                        <h3 className="text-xl text-[#80db66] tracking-[0.25em] font-normal pt-0">Education &  Experience</h3>
                        <h1 className="text-3xl text-gray-800 font-medium py-4">My Education</h1>

                    </div>
                    <div className="w-full h-auto flex justify-start items-start gap-5 py-2 group"
                        onMouseEnter={() => {
                            setHover(true);
                        }}
                        onMouseLeave={() => {
                            setHover(false);
                        }}>
                        <div className="h-auto flex justify-start items-start gap-5">
                            <div className="w-18 h-18 rounded-lg flex justify-center items-start border-1 border-[#80db66] bg-[#80db66] group-hover:bg-white  transition-all duration-300 ease-in-out">
                                <div className="rounded-full mt-2 group-hover:[transform:rotateY(360deg)] transition-all duration-300 ease-in-out">
                                    <EducationIcon hover={hover} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto px-4">
                            <h1 className="text-2xl text-gray-800 font-medium"> Masters in Computer Applications </h1>
                            <h3 className="text-lg text-gray-800 pt-2 font-medium">Lachoo Memorial College Jodhpur<span className="text-gray-400 font-normal text-center">（ 2024 - 2026 ）</span></h3>
                            <p className="text-[#4d4d75] text-lg mt-4 text-lg font-normal">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-start items-start gap-5 py-2 group"
                        onMouseEnter={() => {
                            setHover2(true);
                        }}
                        onMouseLeave={() => {
                            setHover2(false);
                        }}>
                        <div className="h-auto flex justify-start items-start gap-5">
                            <div className="w-18 h-18 rounded-lg flex justify-center items-start border-1 border-[#80db66] bg-[#80db66] group-hover:bg-white  transition-all duration-300 ease-in-out">
                                <div className="rounded-full mt-2 group-hover:[transform:rotateY(360deg)] transition-all duration-300 ease-in-out">
                                    <EducationIcon hover={hover2} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto px-4">
                            <h1 className="text-2xl text-gray-800 font-medium"> Bachler's in Computer Applications </h1>
                            <h3 className="text-lg text-gray-800 pt-2 font-medium">Aishwarya College Of Edu. Jodhpur<span className="text-gray-400 font-normal text-center">（ 2021 - 2024 ）</span></h3>
                            <p className="text-[#4d4d75] text-lg mt-4 text-lg font-normal">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                        </div>
                    </div>
                    <hr className="border-t-[1px] border-[#b7b7c5] mt-6" />
                    <h1 className="text-3xl text-gray-800 font-medium py-4">Work Experience</h1>
                    <div className="w-full h-auto flex justify-start items-start gap-5 py-2 group"
                        onMouseEnter={() => {
                            setHover3(true);
                        }}
                        onMouseLeave={() => {
                            setHover3(false);
                        }}>
                        <div className="h-auto flex justify-start items-start gap-5">
                            <div className="w-18 h-18 rounded-lg flex justify-center items-start border-1 border-[#80db66] bg-[#80db66] group-hover:bg-white  transition-all duration-300 ease-in-out">
                                <div className="rounded-full mt-2 group-hover:[transform:rotateY(360deg)] transition-all duration-300 ease-in-out">
                                    <BagIcon hover={hover3} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-auto px-4">
                            <h1 className="text-2xl text-gray-800 font-medium"> Laravel Developer </h1>
                            <h3 className="text-lg text-gray-800 pt-2 font-medium">Microlent Systems PVT. LTD<span className="text-gray-400 font-normal text-center">（ 2024 - 2025 ）</span></h3>
                            <p className="text-[#4d4d75] text-lg mt-4 text-lg font-normal">Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center items-center h-full ">
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
                                    src={educationImage}
                                    // height={400}
                                    // width={200}
                                    alt=""
                                    className=" rounded-2xl w-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}