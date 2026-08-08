"use client"
import Image from "next/image"
import serIcon from "@/public/assets/intro-ft-icon1.webp"
import serIcon2 from "@/public/assets/intro-ft-icon2.webp"
import serIcon3 from "@/public/assets/intro-ft-icon3.webp"
import serIcon4 from "@/public/assets/intro-ft-icon4.webp"
import { motion, useMotionValue } from "framer-motion";
import Cards from "./navbar/cards"
export default function Skills() {

    const cardsData = [
        {
            id:1,
            title:"Web Development",
            content:"Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img:serIcon,
            pos:'self-start'
        },
        {
            id:2,
            title:"Software Development",
            content:"Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img:serIcon2,
            pos:'self-end'
        },
        {
            id:3,
            title:"System Development",
            content:"Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img:serIcon3,
            pos:'self-start'
        },
        {
            id:4,
            title:"Security Analysis",
            content:"Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img:serIcon4,
            pos:'self-end'
        }
    ]
    

    return (
        <div className="w-full h-screen bg-[#e1ebf5] flex justify-center items-center p-2 py-5 pt-10 pb-10">
            <div className="w-full max-w-7xl h-auto py-2 mt-6">
                <div className="w-full h-100 grid grid-cols-4 items-center gap-5 perspective-[1000px]">
                    {
                        cardsData.map((cardData) =>{
                           return (<Cards key={cardData.id} pos={cardData.pos}
                                    img={cardData.img} title={cardData.title} content={cardData.content} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}