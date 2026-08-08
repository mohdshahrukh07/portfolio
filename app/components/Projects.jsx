"use client"
import port1 from "../../public/assets/port-img1.webp"
import Image from "next/image"
export default function Projets() {
    const projects = [
        {
            id: 1,
            heading:"Chat Application",
            title: "Hi-Chat a Real-Time Chat Platform ",
        },
        {
            id: 2,
            heading:"complere",
            title: "Quality Compliance Platform",
        },
        {
            id: 3,
            heading:"Hotal Management",
            title: "Complete Hotel Booking System",
        },
        {
            id: 4,
            heading:"Portfolio",
            title: "Personal Portfolio Website",
        }
    ]
            
    return (
        <div className="w-full h-auto flex justify-center items-start overflow-hidden bg-[#f2f9fd] p-2 py-3">
            <div className="w-full max-w-7xl h-auto flex flex-col justify-items-start items-center py-2 mt-6">
                <div className="flex flex-col justify-start items-center m-5">
                    <h3 className="text-xl text-[#80db66] tracking-[0.25em] font-normal">PORTFOLIO</h3>
                    <h1 className="text-6xl text-gray-800 font-medium py-2">My Recent Works</h1>
                </div>
                <div className="w-full h-auto flex flex-col justify-center items-start py-2 mt-6">
                    {projects.map((project) => (
                        
                            <div key={project.id} className={`w-full h-50 flex justify-between items-center gap-4 border-t border-gray-400 group ${project.id != 4 ? "": "border-b"} `}>
                        <div className="w-[50%] h-full flex justify-items-start items-center gap-20">
                            <div className="w-[30%] h-full flex justify-items-start items-center">
                                <h3 className="text-xl text-gray-400 font-normal">{project.heading}</h3>
                                </div>
                            <div className="w-full h-full flex justify-items-start items-center">
                                <h1 className="text-5xl text-gray-800 font-medium py-2">{project.title}</h1>
                            </div>
                        </div>
                        <div className="w-[50%] h-full flex justify-between items-center pl-25">
                            <div className="w-70 h-auto rounded-xl flex justify-center items-center mr-10 transition-all duration-500 ease-in-out group-hover:-rotate-15">
                                <Image src={port1} alt="Project Image" 
                                className="w-full rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"/>
                            </div>
                            <div className="w-25 h-25 border-1 border-gray-400 rounded-full flex justify-center items-center transition-all duration-500 ease-in-out group/icon hover:bg-[#80db66]">
                                <span className="text-[#80db66] text-4xl leading-none flex justify-center items-center font-normal group-hover/icon:text-white">+</span>
                            </div>
                        </div>
                    </div>
                        
                    ))}
                </div>
            </div>

        </div>
    )
}