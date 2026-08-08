"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Works", href: "#" },
        { name: "Service", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Blog", href: "#" },
    ];
    const [selected, setSelected] = useState(navLinks[0].name);
    const handleLinkClick = (name) =>{
        setSelected(name);
    }
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
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
        if (scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollY]);
    return (
        <header className={`${isScrolled ? "bg-[#272730]" : "bg-transparent"} text-white  fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out`}>
            <div className={`mx-auto flex ${isScrolled ? "h-20 " : "h-32 "} px-6 h-20 max-w-7xl items-center justify-between transition-all duration-300 ease-in-out`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className={`flex ${isScrolled ? "h-9 w-9 text-lg" : "h-11 w-11 text-2xl"} items-center justify-center rounded-full bg-lime-500 font-bold text-[#272730]  transition-all duration-300 ease-in-out`}>
                        MS
                    </div>

                    <span className={`${isScrolled ? "text-xl" : "text-3xl"} font-bold transition-all duration-300 ease-in-out`}>Mohd Shahrukh</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-12 lg:flex">
                    {navLinks.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => handleLinkClick(item.name)}
                            className={`text-lg font-medium transition ${selected === item.name
                                ? "text-lime-500"
                                : "text-white hover:text-lime-500"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {/* Button */}
                    <button className={`rounded-md border ${isScrolled ? "px-4 py-2" : "px-7 py-3"} border-lime-500 text-lg font-medium transition-all duration-300 ease-in-out hover:bg-lime-500 hover:text-black`}>
                        DOWNLOAD CV
                    </button>
                </nav>


            </div>
        </header>
    );
}