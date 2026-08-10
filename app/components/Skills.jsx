
"use client";

import Image from "next/image";
import serIcon from "@/public/assets/intro-ft-icon1.webp";
import serIcon2 from "@/public/assets/intro-ft-icon2.webp";
import serIcon3 from "@/public/assets/intro-ft-icon3.webp";
import serIcon4 from "@/public/assets/intro-ft-icon4.webp";
import Cards from "./navbar/cards";

export default function Skills() {
    const cardsData = [
        {
            id: 1,
            title: "Web Development",
            content:
                "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img: serIcon,
            pos: "self-start",
        },
        {
            id: 2,
            title: "Software Development",
            content:
                "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img: serIcon2,
            pos: "self-end",
        },
        {
            id: 3,
            title: "System Development",
            content:
                "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img: serIcon3,
            pos: "self-start",
        },
        {
            id: 4,
            title: "Security Analysis",
            content:
                "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
            img: serIcon4,
            pos: "self-end",
        },
    ];

    return (
        <div
            className="
        flex w-full justify-center bg-[#e1ebf5]
        px-8 py-10

        sm:px-5

        lg:min-h-screen
        lg:items-center
        lg:px-6
      "
        >
            <div
                className="
          mt-4 w-full max-w-7xl py-2

          sm:mt-6

          lg:mt-6
        "
            >
                <div
                    className="
            grid w-full items-center gap-6
            perspective-[1000px]

            grid-cols-1

            sm:grid-cols-2

            lg:h-100
            lg:grid-cols-4
            lg:gap-5
          "
                >
                    {cardsData.map((cardData) => (
                        <Cards
                            key={cardData.id}
                            pos={cardData.pos}
                            img={cardData.img}
                            title={cardData.title}
                            content={cardData.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}