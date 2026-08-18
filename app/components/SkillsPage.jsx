"use client"

import html from "@/public/assets/html.png"
import css from "@/public/assets/css.svg"
import git from "@/public/assets/git.svg"
import js from "@/public/assets/js.webp"
import laravel from "@/public/assets/laravel.svg"
import mysql from "@/public/assets/mysql.svg"
import next from "@/public/assets/next.webp"
import node from "@/public/assets/node.svg"
import php from "@/public/assets//php.svg"
import python from "@/public/assets/python.svg"
import react from "@/public/assets/react.svg"
import tailwind from "@/public/assets/tailwind.svg"

import Image from "next/image"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function EducationPage() {
    const skills = [
        {
            key: html,
            name: "HTML",
            percentage: 70,
            bgColor: "#ff651a"
        },
        {
            key: js,
            name: "JavaScrip",
            percentage: 65,
            bgColor: "#fcd241"
        },
        {
            key: php,
            name: "PHP",
            percentage: 75,
            bgColor: "#798ac8"
        },
        {
            key: python,
            name: "Python",
            percentage: 50,
            bgColor: "#fcd241"
        },
        {
            key: laravel,
            name: "Laravel",
            percentage: 75,
            bgColor: "#f52d1c"
        },
        {
            key: node,
            name: "Node.js",
            percentage: 60,
            bgColor: "#4d8d48"
        },
        {
            key: react,
            name: "React.js",
            percentage: 68,
            bgColor: "#00d8ff"
        },
        {
            key: next,
            name: "Next.js",
            percentage: 55,
            bgColor: "#ffffff"
        },
        {
            key: mysql,
            name: "MySql",
            percentage: 75,
            bgColor: "#4478a2"
        },
        {
            key: css,
            name: "Css",
            percentage: 70,
            bgColor: "#1d9ded"
        },
        {
            key: tailwind,
            name: "Tailwind Css",
            percentage: 65,
            bgColor: "#08b6d7"
        },
        {
            key: git,
            name: "Git & Github",
            percentage: 70,
            bgColor: "#ffffff"
        }
    ]

    return (
        <div className="
            w-full
            min-h-screen
            flex
            justify-center
            items-center
            bg-[#25262f]
            px-2
            py-15
            overflow-hidden
        ">

            <div className="
                w-full
                max-w-7xl
                h-auto
                flex
                justify-center
                items-start
                gap-4
                py-2
                mt-4

                max-lg:flex-col
                max-lg:items-center
                max-lg:gap-10
            ">

                {/* ================= LEFT CONTENT ================= */}

                <div className="
                    w-[45%]
                    h-auto
                    px-5
                    pb-10

                    max-xl:w-[42%]

                    max-lg:w-full
                    max-lg:max-w-3xl
                    max-lg:text-center

                    max-sm:px-3
                ">

                    <h3 className="
                        text-xl
                        text-[#80db66]
                        tracking-[0.25em]
                        font-medium

                        max-sm:text-lg
                        max-sm:tracking-[0.2em]
                    ">
                        My Skills
                    </h3>

                    <h1 className="
                        text-6xl
                        text-white
                        font-medium
                        py-4

                        max-xl:text-5xl

                        max-lg:text-5xl

                        max-sm:text-4xl
                        max-[400px]:text-3xl
                    ">
                        Growing Over Times
                    </h1>

                    <p className="
                        text-[#9098bb]
                        mt-4
                        text-xl
                        font-normal
                        leading-relaxed

                        max-xl:text-lg

                        max-lg:text-lg

                        max-sm:text-base
                    ">
                        Sed ut perspiciatis unde omnis iste natus Sed ut
                        perspiciatis unde omnis iste natus kobita tumi sopno
                        charini hoye khbor nio na sit voluptatem accusantium
                        dolore.
                    </p>

                </div>


                {/* ================= SKILLS ================= */}

                <div className="
                    w-[50%]
                    mx-auto
                    grid
                    grid-cols-4
                    gap-y-5
                    gap-x-6
                    justify-items-center

                    max-xl:w-[54%]
                    max-xl:grid-cols-3
                    max-xl:gap-x-5

                    max-lg:w-full
                    max-lg:max-w-3xl
                    max-lg:grid-cols-3

                    max-md:grid-cols-2
                    max-md:gap-x-6
                    max-md:gap-y-5

                    max-sm:w-full
                    max-sm:grid-cols-2
                    max-sm:gap-x-4
                    max-sm:gap-y-4

                    max-[400px]:gap-x-3
                ">

                    {skills.map((skill) => (

                        <div
                            className="
                                group
                                h-40
                                w-40
                                [perspective:1000px]

                                max-xl:h-36
                                max-xl:w-36

                                max-md:h-40
                                max-md:w-40

                                max-sm:h-36
                                max-sm:w-36

                                max-[400px]:h-32
                                max-[400px]:w-32
                            "
                            key={skill.name}
                        >

                            <div className="
                                relative
                                h-full
                                w-full
                                transition-transform
                                duration-500
                                [transform-style:preserve-3d]
                                group-hover:[transform:rotateY(180deg)]
                            ">

                                {/* ================= FRONT ================= */}

                                <div className="
                                    absolute
                                    inset-0
                                    border
                                    border-[#474851]
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#25262f]
                                    [backface-visibility:hidden]
                                ">

                                    <div className="
                                        relative
                                        w-24
                                        h-24

                                        max-xl:w-20
                                        max-xl:h-20

                                        max-md:w-24
                                        max-md:h-24

                                        max-sm:w-20
                                        max-sm:h-20

                                        max-[400px]:w-18
                                        max-[400px]:h-18
                                    ">
                                        <Image
                                            src={skill.key}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3 className="
                                        mt-3
                                        font-medium
                                        text-white
                                        text-center

                                        max-[400px]:text-sm
                                    ">
                                        {skill.name}
                                    </h3>

                                </div>


                                {/* ================= BACK ================= */}

                                <div className="
                                    absolute
                                    inset-0
                                    flex
                                    flex-col
                                    items-center
                                    justify-start
                                    border
                                    border-[#474851]
                                    rounded-2xl
                                    bg-[#25262f]
                                    [transform:rotateY(180deg)]
                                    [backface-visibility:hidden]
                                ">

                                    <h3 className="
                                        mt-2
                                        font-medium
                                        text-lg
                                        text-white
                                        text-center

                                        max-[400px]:text-base
                                    ">
                                        {skill.name}
                                    </h3>

                                    <div className="
                                        w-20
                                        h-20

                                        max-xl:w-18
                                        max-xl:h-18

                                        max-sm:w-18
                                        max-sm:h-18

                                        max-[400px]:w-16
                                        max-[400px]:h-16
                                    ">

                                        <CircularProgressbar
                                            strokeWidth={10}
                                            value={skill.percentage}
                                            text={`${skill.percentage}%`}
                                            styles={{
                                                path: {
                                                    stroke: skill.bgColor
                                                },
                                                text: {
                                                    fill: skill.bgColor
                                                }
                                            }}
                                        />

                                    </div>

                                    <p
                                        className="
                                            pt-2
                                            text-sm

                                            max-[400px]:text-xs
                                        "
                                        style={{
                                            color: skill.bgColor
                                        }}
                                    >
                                        Proficiency
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}