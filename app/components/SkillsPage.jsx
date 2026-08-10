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
import 'react-circular-progressbar/dist/styles.css';
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
            bgColor: '#798ac8'
        },
        {
            key: python,
            name: "Python",
            percentage: 50,
            bgColor: '#fcd241'
        },
        {
            key: laravel,
            name: "Laravel",
            percentage: 75,
            bgColor: '#f52d1c'
        },
        {
            key: node,
            name: "Node.js",
            percentage: 60,
            bgColor: '#4d8d48'
        },
        {
            key: react,
            name: "React.js",
            percentage: 68,
            bgColor: '#00d8ff'
        },
        {
            key: next,
            name: "Next.js",
            percentage: 55,
            bgColor: '#ffffff'

        },
        {
            key: mysql,
            name: "MySql",
            percentage: 75,
            bgColor: '#4478a2'
        },
        {
            key: css,
            name: "Css",
            percentage: 70,
            bgColor: '#1d9ded'
        },
        {
            key: tailwind,
            name: "Tailwind Css",
            percentage: 65,
            bgColor: '#08b6d7'
        },
        {
            key: git,
            name: "Git & Github",
            percentage: 70,
            bgColor: '#ffffff'
        }

    ]
    return (
        <div className="w-full h-auto flex justify-center items-center  bg-[#25262f] p-2 py-15">

            <div className=" w-full max-w-7xl h-auto flex justify-center items-start py-2 mt-4
                max-sm:flex-col max-sm:items-center">
                <div className="w-[45%] h-full px-5 pb-10 max-sm:w-full">
                    <h3 className="text-xl text-[#80db66] tracking-[0.25em] font-medium">My Skills</h3>
                    <h1 className="text-6xl text-white font-medium py-4">Growing Over Times</h1>
                    <p className="text-[#9098bb] mt-4 text-xl font-normal">
                        Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.</p>
                </div>
                <div className="w-[50vw] mx-auto grid grid-cols-4 gap-y-5 gap-x-6 max-sm:w-full
                max-sm:grid-cols-2 justify-items-center">
                                {skills.map((skill) => (
                                    <div className="group h-40 w-40 [perspective:1000px]"
                                        key={skill.name}>
                                        <div
                                            className="
                                                relative h-full w-full
                                                transition-transform duration-500
                                                [transform-style:preserve-3d]
                                                group-hover:[transform:rotateY(180deg)]"
                                        >
                                            {/* Front */}
                                            <div
                                                className="
                                                    absolute inset-0
                                                    border border-[#474851]
                                                    flex flex-col items-center justify-center
                                                    rounded-2xl bg-[#25262f]
                                                    [backface-visibility:hidden]"
                                            >
                                                <div className="relative w-24 h-24">
                                                    <Image
                                                        src={skill.key}
                                                        alt={skill.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                
                                                <h3 className="mt-3 font-medium text-white">
                                                    {skill.name}
                                                </h3>
                                            </div>
                
                                            {/* Back */}
                                            <div
                                                className="
                                                    absolute inset-0
                                                    flex flex-col items-center justify-start
                                                    border border-[#474851]
                                                    rounded-2xl bg-[#25262f]
                                                    [transform:rotateY(180deg)]
                                                    [backface-visibility:hidden]"
                                            >
                                                <h3 className="mt-2 font-medium text-lg text-white">
                                                    {skill.name}
                                                </h3>
                                                <div className="w-20 h-20">
                
                                                    <CircularProgressbar
                                                        strokeWidth={10}
                                                        value={66} text={`${skill.percentage}%`}
                                                        styles={{
                                                            path: {
                                                                stroke: `${skill.bgColor}`,
                                                            },
                                                            text: {
                                                                fill: `${skill.bgColor}`
                                                            }
                                                        }}
                                                    />
                                                </div>
                                                <p className="pt-2 text-sm" style={{ color: skill.bgColor }}>Proficiency</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
            </div>

        </div>
    )
}