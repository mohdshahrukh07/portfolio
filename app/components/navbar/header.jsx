"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "about" },
        { name: "Works", href: "works" },
        { name: "Skills", href: "skills" },
        { name: "Contact", href: "contact" },
        // { name: "Blog", href: "#" },
    ];

    const [selected, setSelected] = useState(navLinks[0].name);
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsScrolled(scrollY > 0);
    }, [scrollY]);


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const handleLinkClick = (name) => {
        setSelected(name);
        setIsMenuOpen(false);

        const id = name.toLowerCase();
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            window.history.replaceState(null, "", `#${id}`);
        }
    };

    return (
        <>

            <header
                className={`
                    fixed
                    top-0
                    left-0
                    z-50
                    w-full
                    text-white
                    transition-all
                    duration-300
                    ease-in-out

                    ${isScrolled
                        ? "bg-[#272730]/95 backdrop-blur-md"
                        : "bg-transparent"
                    }
                `}
            >
                <div
                    className={`
                        mx-auto
                        flex
                        max-w-7xl
                        items-center
                        justify-between
                        px- 4 
                        sm:px- 6
                        transition-all
                        duration-300
                        ease-in-out

                        ${isScrolled
                            ? "h-20"
                            : "h-24 sm:h-28 lg:h-32"
                        }
                    `}
                >

                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3"
                    >
                        {/* Logo Circle */}
                        <div
                            className={`
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-lime-500
                                font-bold
                                text-[#272730]
                                transition-all
                                duration-300
                                ease-in-out

                                ${isScrolled
                                    ? "h-9 w-9 text-lg"
                                    : "h-10 w-10 text-xl sm:h-11 sm:w-11 sm:text-2xl"
                                }
                            `}
                        >
                            MS
                        </div>

                        {/* Logo Text */}
                        <span
                            className={`
                                font-bold
                                transition-all
                                duration-300
                                ease-in-out

                                ${isScrolled
                                    ? "text-lg sm:text-xl"
                                    : "text-xl sm:text-2xl lg:text-3xl"
                                }
                            `}
                        >
                            Mohd Shahrukh
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 xl:gap-12 lg:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={`#`+ item.href}
                                onClick={() =>
                                    handleLinkClick(item.name)
                                }
                                className={`
                                    text-lg
                                    font-medium
                                    transition
                                    duration-300

                                    ${selected === item.name
                                        ? "text-lime-500"
                                        : "text-white hover:text-lime-500"
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Desktop Download Button */}
                        <button
                            className={`
                                rounded-md
                                border
                                border-lime-500
                                text-lg
                                font-medium
                                transition-all
                                duration-300
                                ease-in-out
                                hover:bg-lime-500
                                hover:text-black

                                ${isScrolled
                                    ? "px-4 py-2"
                                    : "px-7 py-3"
                                }
                            `}
                        >
                            DOWNLOAD CV
                        </button>
                    </nav>

                    <div className="flex items-center gap-2 lg:hidden">
                        {/* Download CV */}
                        <button
                            className={`
                                rounded-md
                                border
                                border-lime-500
                                px-3
                                py-2
                                text-xs
                                sm:px-4
                                sm:py-2
                                sm:text-sm
                                font-medium
                                transition-all
                                duration-300
                                hover:bg-lime-500
                                hover:text-black
                            `}
                        >
                            DOWNLOAD CV
                        </button>

                        {/* Hamburger */}
                        <button
                            onClick={() =>
                                setIsMenuOpen(true)
                            }
                            aria-label="Open menu"
                            className="
                                flex
                                h-10
                                w-10
                                flex-col
                                items-center
                                justify-center
                                gap-1.5
                                rounded-md
                            "
                        >
                            <span className="h-0.5 w-5 bg-lime-500" />
                            <span className="h-0.5 w-5 bg-lime-500" />
                            <span className="h-0.5 w-5 bg-lime-500" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ========================================= */}
            {/* MOBILE OVERLAY */}
            {/* ========================================= */}

            <div
                onClick={() => setIsMenuOpen(false)}
                className={`
                    fixed
                    inset-0
                    z-[55]
                    bg-black/60
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    lg:hidden

                    ${isMenuOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }
                `}
            />

            {/* ========================================= */}
            {/* MOBILE LEFT MENU */}
            {/* ========================================= */}

            <aside
                className={`
                    fixed
                    top-0
                    left-0
                    z-[60]
                    h-screen
                    w-[280px]
                    max-w-[85vw]
                    bg-[#272730]
                    shadow-2xl
                    transition-transform
                    duration-300
                    ease-in-out
                    lg:hidden

                    ${isMenuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                {/* Mobile Menu Header */}
                <div
                    className="
                        flex
                        h-24
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        px-5
                    "
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-2"
                    >
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-lime-500
                                text-xl
                                font-bold
                                text-[#272730]
                            "
                        >
                            MS
                        </div>

                        <span className="text-lg font-bold">
                            Mohd Shahrukh
                        </span>
                    </Link>

                    {/* Close Button */}
                    <button
                        onClick={() =>
                            setIsMenuOpen(false)
                        }
                        aria-label="Close menu"
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-md
                            border
                            border-white/20
                            text-2xl
                            transition
                            hover:border-lime-500
                            hover:text-lime-500
                        "
                    >
                        ×
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col px-5 py-6">
                    {navLinks.map((item, index) => (
                        <Link
                            key={item.name}
                            href={`#` + item.href}
                            onClick={() =>
                                handleLinkClick(item.name)
                            }
                            className={`
                                border-b
                                border-white/10
                                py-4
                                text-lg
                                font-medium
                                transition-all
                                duration-300

                                ${selected === item.name
                                    ? "pl-2 text-lime-500"
                                    : "text-white hover:pl-2 hover:text-lime-500"
                                }
                            `}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Download Button */}
                <div className="px-5 pt-4">
                    <button
                        className="
                            w-full
                            rounded-md
                            border
                            border-lime-500
                            px-5
                            py-3
                            text-base
                            font-medium
                            text-white
                            transition-all
                            duration-300
                            hover:bg-lime-500
                            hover:text-black
                        "
                    >
                        DOWNLOAD CV
                    </button>
                </div>
            </aside>
        </>
    );
}
