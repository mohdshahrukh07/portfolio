"use client";

import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import serIcon from "@/public/assets/intro-ft-icon1.webp";

export default function Cards({pos,img,title,content }) {
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
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
         transition: "transform 0.2s ease-out"
      }}
      className={`h-90 rounded-xl bg-white p-10 ${pos}`}
    >
      <div className="w-20 h-20 mb-3">
        <Image src={img} alt="" />
      </div>

      <h1 className="text-2xl py-3 text-gray-800 font-medium">
        {title}
      </h1>

      <p className="text-[#4d4d75] text-normal text-lg">
        {content}
      </p>
    </motion.div>
  );
}