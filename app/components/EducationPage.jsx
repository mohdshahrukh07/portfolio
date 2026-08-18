"use client";

import educationImage from "@/public/assets/education-img.webp";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import EducationIcon from "./icons/educationIcon";
import BagIcon from "./icons/bagIcon";
import { useState } from "react";

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
        <div
            className="
                w-full
                max-w-full
                h-auto
                flex
                justify-center
                items-center
                bg-[#f2f9fd]
                px-2
                py-12

                overflow-x-clip
            "
        >
            <div
                className="
                    w-full
                    max-w-7xl
                    h-auto
                    flex
                    justify-center
                    items-start
                    py-2
                    mt-4

                    max-lg:flex-col
                    max-lg:gap-5

                    min-w-0
                "
            >

                {/* ================================================= */}
                {/* EDUCATION / EXPERIENCE CONTENT                   */}
                {/* ================================================= */}

                <div
                    className="
                        w-[55%]
                        h-auto
                        px-5
                        min-w-0

                        max-xl:w-[55%]

                        max-lg:w-full
                        max-lg:px-2

                        max-sm:px-1
                    "
                >

                    {/* ================= SECTION TITLE ================= */}

                    <div className="min-w-0">
                        <h3
                            className="
                                text-xl
                                text-[#80db66]
                                tracking-[0.25em]
                                font-normal
                                pt-0

                                max-sm:text-lg
                                max-sm:tracking-[0.18em]
                            "
                        >
                            Education &amp; Experience
                        </h3>

                        <h1
                            className="
                                text-3xl
                                text-gray-800
                                font-medium
                                py-4

                                max-sm:text-2xl
                            "
                        >
                            My Education
                        </h1>
                    </div>


                    {/* ================================================= */}
                    {/* MASTERS                                            */}
                    {/* ================================================= */}

                    <div
                        className="
                            w-full
                            h-auto
                            flex
                            justify-start
                            items-start
                            gap-5
                            py-2
                            group
                            min-w-0

                            max-sm:gap-3
                        "
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >

                        {/* ICON */}

                        <div
                            className="
                                h-auto
                                flex
                                justify-start
                                items-start
                                gap-5
                                shrink-0

                                max-lg:gap-2
                            "
                        >
                            <div
                                className="
                                    w-18
                                    h-18
                                    shrink-0
                                    rounded-lg
                                    flex
                                    justify-center
                                    items-start
                                    border
                                    border-[#80db66]
                                    bg-[#80db66]
                                    group-hover:bg-white
                                    transition-all
                                    duration-300
                                    ease-in-out

                                    max-sm:w-15
                                    max-sm:h-15
                                "
                            >
                                <div
                                    className="
                                        rounded-full
                                        mt-2
                                        group-hover:[transform:rotateY(360deg)]
                                        transition-all
                                        duration-300
                                        ease-in-out
                                    "
                                >
                                    <EducationIcon hover={hover} />
                                </div>
                            </div>
                        </div>


                        {/* CONTENT */}

                        <div
                            className="
                                w-full
                                h-auto
                                px-4
                                min-w-0

                                max-lg:px-1
                            "
                        >
                            <h1
                                className="
                                    text-2xl
                                    text-gray-800
                                    font-medium
                                    break-words

                                    max-md:text-xl
                                    max-sm:text-lg
                                "
                            >
                                Masters in Computer Applications
                            </h1>

                            <h3
                                className="
                                    text-lg
                                    text-gray-800
                                    pt-2
                                    font-medium
                                    break-words

                                    max-md:text-base
                                "
                            >
                                Lachoo Memorial College Jodhpur{" "}
                                <span
                                    className="
                                        text-gray-400
                                        font-normal
                                        text-center
                                        whitespace-nowrap

                                        max-sm:whitespace-normal
                                    "
                                >
                                    （ 2024 - 2026 ）
                                </span>
                            </h3>

                            <p
                                className="
                                    text-[#4d4d75]
                                    text-lg
                                    mt-4
                                    font-normal
                                    leading-relaxed
                                    break-words

                                    max-md:text-base
                                "
                            >
                                Ludantium totam rem aperia meaque ipsa quae
                                ab illo inven tore veritatis et quasi
                                architecto beatae vitae.
                            </p>
                        </div>
                    </div>


                    {/* ================================================= */}
                    {/* BACHELOR                                          */}
                    {/* ================================================= */}

                    <div
                        className="
                            w-full
                            h-auto
                            flex
                            justify-start
                            items-start
                            gap-5
                            py-2
                            group
                            min-w-0

                            max-sm:gap-3
                        "
                        onMouseEnter={() => setHover2(true)}
                        onMouseLeave={() => setHover2(false)}
                    >

                        {/* ICON */}

                        <div
                            className="
                                h-auto
                                flex
                                justify-start
                                items-start
                                gap-5
                                shrink-0

                                max-lg:gap-2
                            "
                        >
                            <div
                                className="
                                    w-18
                                    h-18
                                    shrink-0
                                    rounded-lg
                                    flex
                                    justify-center
                                    items-start
                                    border
                                    border-[#80db66]
                                    bg-[#80db66]
                                    group-hover:bg-white
                                    transition-all
                                    duration-300
                                    ease-in-out

                                    max-sm:w-15
                                    max-sm:h-15
                                "
                            >
                                <div
                                    className="
                                        rounded-full
                                        mt-2
                                        group-hover:[transform:rotateY(360deg)]
                                        transition-all
                                        duration-300
                                        ease-in-out
                                    "
                                >
                                    <EducationIcon hover={hover2} />
                                </div>
                            </div>
                        </div>


                        {/* CONTENT */}

                        <div
                            className="
                                w-full
                                h-auto
                                px-4
                                min-w-0

                                max-lg:px-1
                            "
                        >
                            <h1
                                className="
                                    text-2xl
                                    text-gray-800
                                    font-medium
                                    break-words

                                    max-md:text-xl
                                    max-sm:text-lg
                                "
                            >
                                Bachler&apos;s in Computer Applications
                            </h1>

                            <h3
                                className="
                                    text-lg
                                    text-gray-800
                                    pt-2
                                    font-medium
                                    break-words

                                    max-md:text-base
                                "
                            >
                                Aishwarya College Of Edu. Jodhpur{" "}
                                <span
                                    className="
                                        text-gray-400
                                        font-normal
                                        text-center
                                        whitespace-nowrap

                                        max-sm:whitespace-normal
                                    "
                                >
                                    （ 2021 - 2024 ）
                                </span>
                            </h3>

                            <p
                                className="
                                    text-[#4d4d75]
                                    text-lg
                                    mt-4
                                    font-normal
                                    leading-relaxed
                                    break-words

                                    max-md:text-base
                                "
                            >
                                Ludantium totam rem aperia meaque ipsa quae
                                ab illo inven tore veritatis et quasi
                                architecto beatae vitae.
                            </p>
                        </div>
                    </div>


                    {/* ================= DIVIDER ================= */}

                    <hr
                        className="
                            border-t-[1px]
                            border-[#b7b7c5]
                            mt-6
                        "
                    />


                    {/* ================================================= */}
                    {/* WORK EXPERIENCE TITLE                            */}
                    {/* ================================================= */}

                    <h1
                        className="
                            text-3xl
                            text-gray-800
                            font-medium
                            py-4

                            max-sm:text-2xl
                        "
                    >
                        Work Experience
                    </h1>


                    {/* ================================================= */}
                    {/* WORK EXPERIENCE                                  */}
                    {/* ================================================= */}

                    <div
                        className="
                            w-full
                            h-auto
                            flex
                            justify-start
                            items-start
                            gap-5
                            py-2
                            group
                            min-w-0

                            max-sm:gap-3
                        "
                        onMouseEnter={() => setHover3(true)}
                        onMouseLeave={() => setHover3(false)}
                    >

                        {/* ICON */}

                        <div
                            className="
                                h-auto
                                flex
                                justify-start
                                items-start
                                gap-5
                                shrink-0

                                max-lg:gap-2
                            "
                        >
                            <div
                                className="
                                    w-18
                                    h-18
                                    shrink-0
                                    rounded-lg
                                    flex
                                    justify-center
                                    items-start
                                    border
                                    border-[#80db66]
                                    bg-[#80db66]
                                    group-hover:bg-white
                                    transition-all
                                    duration-300
                                    ease-in-out

                                    max-sm:w-15
                                    max-sm:h-15
                                "
                            >
                                <div
                                    className="
                                        rounded-full
                                        mt-2
                                        group-hover:[transform:rotateY(360deg)]
                                        transition-all
                                        duration-300
                                        ease-in-out
                                    "
                                >
                                    <BagIcon hover={hover3} />
                                </div>
                            </div>
                        </div>


                        {/* CONTENT */}

                        <div
                            className="
                                w-full
                                h-auto
                                px-4
                                min-w-0

                                max-lg:px-1
                            "
                        >
                            <h1
                                className="
                                    text-2xl
                                    text-gray-800
                                    font-medium
                                    break-words

                                    max-md:text-xl
                                    max-sm:text-lg
                                "
                            >
                                Laravel Developer
                            </h1>

                            <h3
                                className="
                                    text-lg
                                    text-gray-800
                                    pt-2
                                    font-medium
                                    break-words

                                    max-md:text-base
                                "
                            >
                                Microlent Systems PVT. LTD{" "}
                                <span
                                    className="
                                        text-gray-400
                                        font-normal
                                        text-center
                                        whitespace-nowrap

                                        max-sm:whitespace-normal
                                    "
                                >
                                    （ 2024 - 2025 ）
                                </span>
                            </h3>

                            <p
                                className="
                                    text-[#4d4d75]
                                    text-lg
                                    mt-4
                                    font-normal
                                    leading-relaxed
                                    break-words

                                    max-md:text-base
                                "
                            >
                                Ludantium totam rem aperia meaque ipsa quae
                                ab illo inven tore veritatis et quasi
                                architecto beatae vitae.
                            </p>
                        </div>
                    </div>
                </div>


                {/* ================================================= */}
                {/* EDUCATION IMAGE                                  */}
                {/* ================================================= */}

                <div
                    className="
                        w-[45%]
                        flex
                        justify-center
                        items-center
                        h-full
                        min-w-0

                        max-lg:w-full
                    "
                >
                    <div
                        className="
                            w-[85%]
                            relative
                            isolate
                            min-w-0

                            max-lg:w-[75%]
                            max-md:w-[80%]
                            max-sm:w-[85%]

                            overflow-visible
                        "
                    >
                        <div
                            style={{
                                perspective: 1000,
                            }}
                        >
                            <motion.div
                                onMouseMove={handleMouseMove}
                                onMouseLeave={reset}
                                variants={slideLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                style={{
                                    rotateX: rotateX,
                                    rotateY: rotateY,
                                    transformStyle:
                                        "preserve-3d",
                                    transition:
                                        "transform 0.2s ease-out",
                                }}
                                className="
                                    max-w-full
                                    will-change-transform
                                "
                            >
                                <Image
                                    src={educationImage}
                                    alt="Education"
                                    className="
                                        rounded-2xl
                                        w-full
                                        h-auto
                                        object-cover
                                        block
                                    "
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
