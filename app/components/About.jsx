"use client";

import aboutImage from "@/public/assets/aboutImg.jpeg";
import cvDownload from "@/public/assets/cv-download.webp";
import downloadBg from "@/public/assets/download-bg.webp";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

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

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = "/assets/MOHD_SHAHRUKH_RESUME.pdf"
        link.download = "MOHD_SHAHRUKH_RESUME.pdf"
        link.click()
    }

    return (
        <div
            id="about"
            className="
            scrolling-smooth
                w-full
                max-w-full
                h-auto
                flex
                justify-center
                items-center
                bg-[#f2f9fd]
                px-2
                py-5
                pt-10
                pb-10
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
                    items-center
                    py-2
                    mt-4

                    max-lg:flex-col
                    max-lg:gap-25

                    max-sm:gap-20
                "
            >
                {/* ================================================= */}
                {/* IMAGE SECTION                                      */}
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

                            max-lg:w-[75%]
                            max-md:w-[80%]
                            max-sm:w-[85%]
                        "
                    >
                        <div style={{ perspective: 1000 }}>
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
                                    transformStyle: "preserve-3d",
                                    transition:
                                        "transform 0.2s ease-out",
                                }}
                            >
                                <Image
                                    src={aboutImage}
                                    alt="About me"
                                    className="
                                        rounded-2xl
                                        w-full
                                        h-auto
                                        object-cover
                                    "
                                />
                            </motion.div>
                        </div>

                        {/* ================================================= */}
                        {/* RIGHT TRIANGLE                                   */}
                        {/* ================================================= */}

                        <motion.div
                            variants={slideLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            className="
                                absolute
                                top-30
                                -right-7
                                h-0
                                w-0
                                border-t-[55px]
                                border-r-[65px]
                                border-b-[55px]
                                border-t-transparent
                                border-b-transparent
                                border-r-[#f2f9fd]

                                max-sm:-right-4
                                max-sm:border-t-[40px]
                                max-sm:border-r-[48px]
                                max-sm:border-b-[40px]
                            "
                        />

                        {/* ================================================= */}
                        {/* TOP LEFT GREEN BOX                               */}
                        {/* ================================================= */}

                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            className="
                                absolute
                                top-20
                                -left-15
                                w-23
                                h-23
                                bg-[#80db66]

                                max-sm:-left-5
                                max-sm:w-18
                                max-sm:h-18
                            "
                        />

                        {/* ================================================= */}
                        {/* BOTTOM RIGHT GREEN BOX                           */}
                        {/* ================================================= */}

                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            className="
                                absolute
                                -bottom-8
                                right-15
                                w-12
                                h-18
                                bg-[#80db66]

                                max-sm:right-5
                                max-sm:w-10
                                max-sm:h-14
                            "
                        />

                        {/* ================================================= */}
                        {/* TOP RIGHT BORDER BOX                             */}
                        {/* ================================================= */}

                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            className="
                                -z-10
                                absolute
                                -top-7
                                -right-7
                                w-30
                                h-30
                                border-4
                                border-[#80db66]

                                max-sm:-top-5
                                max-sm:-right-5
                                max-sm:w-24
                                max-sm:h-24
                            "
                        />

                        {/* ================================================= */}
                        {/* CV DOWNLOAD DECORATION                           */}
                        {/* ================================================= */}

                        <motion.div
                            variants={item}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            className="
                                absolute
                                -bottom-30
                                -left-30

                                max-lg:-bottom-28
                                max-lg:-left-20

                                max-md:-bottom-25
                                max-md:-left-25

                                max-sm:-bottom-20
                                max-sm:left-0
                                max-sm:-translate-x-1/2
                            "
                        >
                            <div
                                className="
                                    relative
                                    w-[250px]
                                    h-[250px]

                                    max-md:w-[220px]
                                    max-md:h-[220px]

                                    max-sm:w-[190px]
                                    max-sm:h-[190px]
                                "
                            >
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                >
                                    <Image
                                        onClick={handleDownload}
                                        src={downloadBg}
                                        width={270}
                                        height={270}
                                        alt=""
                                        className="
                                            w-full
                                            h-full
                                            object-contain
                                        "
                                    />
                                </motion.div>

                                <Image
                                    src={cvDownload}
                                    width={30}
                                    height={30}
                                    alt="Download CV"
                                    className="
                                        absolute
                                        top-1/2
                                        left-1/2
                                        -translate-x-1/2
                                        -translate-y-1/2

                                        max-sm:w-7
                                        max-sm:h-7
                                    "
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ================================================= */}
                {/* DETAILS SECTION                                  */}
                {/* ================================================= */}

                <div
                    className="
                        w-[55%]
                        h-full
                        px-3
                        min-w-0

                        max-lg:w-full
                    "
                >
                    <div
                        className="
                            pl-5
                            m-5
                            min-w-0

                            max-sm:m-0
                            max-sm:px-0
                        "
                    >
                        {/* ================================================= */}
                        {/* TITLE                                             */}
                        {/* ================================================= */}

                        <h3
                            className="
                                text-xl
                                text-[#80db66]
                                tracking-[0.25em]
                                font-normal

                                max-sm:text-lg
                            "
                        >
                            ABOUT ME
                        </h3>

                        <h1
                            className="
                                text-6xl
                                text-gray-800
                                font-medium
                                py-4

                                max-lg:text-5xl
                                max-sm:text-4xl
                                max-[400px]:text-3xl
                            "
                        >
                            I Develop System that Works
                        </h1>

                        <p
                            className="
                                text-[#4d4d75]
                                mt-4
                                text-xl
                                font-normal
                                leading-relaxed

                                max-lg:text-lg
                                max-sm:text-base
                            "
                        >
                            I build reliable and scalable systems using
                            Laravel REST APIs, MySQL, Node.js, and Python.
                            My focus is on creating clean, secure, and
                            high-performance backend solutions that are easy
                            to maintain and built for real-world applications.

                            <span className="mt-6 block">
                                Turning ideas into efficient, scalable, and
                                future-ready digital solutions.
                            </span>
                        </p>

                        <hr
                            className="
                                border-t-[1px]
                                border-[#b7b7c5]
                                mt-6
                            "
                        />

                        {/* ================================================= */}
                        {/* PERSONAL DETAILS                                 */}
                        {/* ================================================= */}

                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-10
                                mt-6

                                max-lg:gap-6

                                max-sm:grid-cols-1
                                max-sm:gap-2
                            "
                        >
                            {/* LEFT DETAILS */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    justify-start
                                    items-start
                                    gap-2
                                    min-w-0
                                "
                            >
                                {/* NAME */}
                                <div
                                    className="
                                        w-full
                                        max-w-[328px]
                                        flex
                                        justify-start
                                        items-center
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-28
                                            shrink-0
                                            text-lg
                                            text-gray-800
                                            font-medium

                                            max-sm:text-base
                                        "
                                    >
                                        Name
                                    </div>

                                    <span
                                        className="
                                            min-w-0
                                            text-[#4d4d75]
                                            text-lg
                                            font-normal
                                            break-words

                                            max-sm:text-base
                                        "
                                    >
                                        Mohd Shahrukh
                                    </span>
                                </div>

                                {/* AGE */}
                                <div
                                    className="
                                        w-full
                                        max-w-[328px]
                                        flex
                                        justify-start
                                        items-center
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-28
                                            shrink-0
                                            text-lg
                                            text-gray-800
                                            font-medium

                                            max-sm:text-base
                                        "
                                    >
                                        Age
                                    </div>

                                    <span
                                        className="
                                            min-w-0
                                            text-[#4d4d75]
                                            text-lg
                                            font-normal

                                            max-sm:text-base
                                        "
                                    >
                                        25 Years
                                    </span>
                                </div>

                                {/* EMAIL */}
                                <div
                                    className="
                                        w-full
                                        max-w-[328px]
                                        flex
                                        justify-start
                                        items-start
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-28
                                            shrink-0
                                            text-lg
                                            text-gray-800
                                            font-medium

                                            max-sm:text-base
                                        "
                                    >
                                        Email
                                    </div>

                                    <span
                                        className="
                                            min-w-0
                                            flex-1
                                            text-[#4d4d75]
                                            text-lg
                                            font-normal
                                            break-all

                                            max-sm:text-base
                                        "
                                    >
                                        mohd800021@gmail.com
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT DETAILS */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    justify-start
                                    items-start
                                    gap-2
                                    min-w-0
                                "
                            >
                                {/* OCCUPATION */}
                                <div
                                    className="
                                        w-full
                                        max-w-[328px]
                                        flex
                                        justify-start
                                        items-center
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-28
                                            shrink-0
                                            text-lg
                                            text-gray-800
                                            font-medium

                                            max-sm:text-base
                                        "
                                    >
                                        Occupation
                                    </div>

                                    <span
                                        className="
                                            min-w-0
                                            flex-1
                                            text-[#4d4d75]
                                            text-lg
                                            font-normal
                                            break-words

                                            max-sm:text-base
                                        "
                                    >
                                        Software Developer
                                    </span>
                                </div>

                                {/* NATIONALITY */}
                                <div
                                    className="
                                        w-full
                                        max-w-[328px]
                                        flex
                                        justify-start
                                        items-center
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-28
                                            shrink-0
                                            text-lg
                                            text-gray-800
                                            font-medium

                                            max-sm:text-base
                                        "
                                    >
                                        Nationality
                                    </div>

                                    <span
                                        className="
                                            min-w-0
                                            text-[#4d4d75]
                                            text-lg
                                            font-normal

                                            max-sm:text-base
                                        "
                                    >
                                        Indian
                                    </span>
                                </div>

                                {/* ADDRESS */}
                                <div
                                    className="
                                        w-full
                                        max-w-[328px]
                                        flex
                                        justify-start
                                        items-center
                                        gap-2
                                        min-w-0
                                    "
                                >
                                    <div
                                        className="
                                            w-28
                                            shrink-0
                                            text-lg
                                            text-gray-800
                                            font-medium

                                            max-sm:text-base
                                        "
                                    >
                                        Address
                                    </div>

                                    <span
                                        className="
                                            min-w-0
                                            flex-1
                                            text-[#4d4d75]
                                            text-lg
                                            font-normal
                                            break-words

                                            max-sm:text-base
                                        "
                                    >
                                        Jodhpur, Rajasthan
                                    </span>
                                </div>
                            </div>
                        </div>

                        <hr
                            className="
                                border-t-[1px]
                                border-[#b7b7c5]
                                mt-6
                            "
                        />

                        {/* ================================================= */}
                        {/* SKILLS                                            */}
                        {/* ================================================= */}

                        <div
                            className="
                                w-full
                                flex
                                text-xl
                                items-start
                                text-gray-800
                                gap-5
                                mt-6
                                min-w-0

                                max-sm:gap-3
                            "
                        >
                            <span
                                className="
                                    shrink-0
                                    pt-1
                                    max-sm:text-lg
                                "
                            >
                                SKILLS:
                            </span>

                            <div
                                className="
                                    min-w-0
                                    flex
                                    justify-start
                                    items-center
                                    gap-2
                                    mt-2
                                    flex-wrap
                                "
                            >
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    React JS
                                </span>

                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Next JS
                                </span>

                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Tailwind CSS
                                </span>

                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    JavaScript
                                </span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Node JS
                                </span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Python
                                </span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Django
                                </span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    PHP
                                </span>
                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Laravel
                                </span>

                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    MySQL
                                </span>

                                <span className="bg-[#2b2b2b] text-white px-3 py-1 rounded-lg text-sm">
                                    Git
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
