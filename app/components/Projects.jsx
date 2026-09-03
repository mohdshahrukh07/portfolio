"use client";

import port1 from "../../public/assets/port-img1.webp";
import shot1 from "../../public/assets/shot1.png";
import shot2 from "../../public/assets/shot2.png";
import shot3 from "../../public/assets/shot3.png";
import shot4 from "../../public/assets/shot4.png";
import Image from "next/image";

export default function Projets() {
    const projects = [
        {
            id: 1,
            heading: "Chat App",
            title: "Real-Time Chat Application",
            img: shot1,
        },
        {
            id: 2,
            heading: "COMPLERE",
            title: "Quality Compliance Platform",
            img: shot2,
        },
        {
            id: 3,
            heading: "HOTAL MANAGEMENT",
            title: "Complete Hotel Booking System",
            img: shot3,
        },
        {
            id: 4,
            heading: "PORTFOLIO",
            title: "Personal Portfolio Website",
            img: shot4,
        },
    ];

    return (
        <div className="w-full min-h-screen flex justify-center items-start overflow-hidden bg-[#f2f9fd] px-3 py-10 sm:px-5 md:px-6 lg:px-8">

            <div className="w-full max-w-7xl flex flex-col justify-start items-center py-2 mt-2 md:mt-6">

                {/* Section Heading */}
                <div className="flex flex-col justify-start items-center text-center mb-8 md:mb-12 lg:mb-16">
                    <h3 className="text-sm sm:text-base md:text-xl text-[#80db66] tracking-[0.2em] md:tracking-[0.25em] font-normal">
                        PORTFOLIO
                    </h3>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 font-medium py-2 leading-tight">
                        My Recent Works
                    </h1>
                </div>

                {/* Projects */}
                <div className="w-full flex flex-col justify-center items-start">

                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`
                                w-full
                                min-h-[250px]
                                md:h-50
                                flex flex-col md:flex-row
                                justify-between
                                items-start md:items-center
                                gap-5 md:gap-4
                                py-6 md:py-0
                                border-t border-gray-300
                                group
                                ${project.id === 4 ? "border-b" : ""}
                            `}
                        >

                            {/* Left Side */}
                            <div className="w-full md:w-[50%] h-auto md:h-full flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-10 lg:gap-20">

                                {/* Category */}
                                <div className="w-full md:w-[30%] h-auto md:h-full flex justify-start items-center">
                                    <h3 className="text-xs sm:text-sm md:text-xl text-gray-400 font-normal uppercase">
                                        {project.heading}
                                    </h3>
                                </div>

                                {/* Project Title */}
                                <div className="w-full md:w-full h-auto md:h-full flex justify-start items-center">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-medium leading-tight py-1 md:py-2">
                                        {project.title}
                                    </h1>
                                </div>

                            </div>

                            {/* Right Side */}
                            <div className="w-full md:w-[50%] h-auto md:h-full flex justify-between items-center gap-4 md:pl-10 lg:pl-20">

                                {/* Project Image */}
                                <div
                                    className="
                                        w-[75%]
                                        sm:w-[70%]
                                        md:w-70
                                        h-auto
                                        rounded-xl
                                        flex
                                        justify-center
                                        items-center
                                        md:mr-10
                                        transition-all
                                        duration-500
                                        ease-in-out

                                        md:opacity-0
                                        md:group-hover:opacity-100
                                        md:group-hover:-rotate-15
                                    "
                                >
                                    <Image
                                        src={project.img || port1}
                                        alt={project.title}
                                        priority={project.id === 1}
                                        className="
                                            w-full
                                            h-auto
                                            rounded-xl
                                            object-cover
                                            opacity-100
                                            md:opacity-0
                                            md:group-hover:opacity-100
                                            transition-all
                                            duration-500
                                            ease-in-out
                                        "
                                    />
                                </div>

                                {/* Plus Button */}
                                <div
                                    className="
                                        shrink-0
                                        w-14 h-14
                                        group/icon
                                        sm:w-16 sm:h-16
                                        md:w-20 md:h-20
                                        lg:w-25 lg:h-25
                                        border
                                        border-gray-400
                                        rounded-full
                                        flex
                                        justify-center
                                        items-center
                                        transition-all
                                        duration-500
                                        ease-in-out
                                        md:hover:bg-[#80db66]
                                    "
                                >
                                    <span
                                        className="
                                            text-[#80db66]
                                            text-2xl
                                            sm:text-3xl
                                            md:text-4xl
                                            leading-none
                                            flex
                                            justify-center
                                            items-center
                                            font-normal
                                            transition-all
                                            duration-500
                                            md:group-hover/icon:text-white
                                        "
                                    >
                                        +
                                    </span>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}