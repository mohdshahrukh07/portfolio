"use client"
import Image from "next/image";
import bgImage from "../../public/bgimage.webp";
import Profile from "../../public/myprofile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Shape4 from '../../public/shape4.png'
import Shape1 from '../../public/shape1.png'
import Shape2 from '../../public/shape2.png'
import Shape3 from '../../public/shape3.png'
export default function ProfilePage(){

    return (
        <div className="relative min-h-screen w-full flex justify-center items-center overflow-hidden">
        <Image
          src={bgImage}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="z-10 relative w-full z-10 h-screen flex justify-start items-center max-w-7xl py-2 mt-4">
          <div className="w-[50%] px-2">
            <h1 className="text-[#81da65] text-3xl px-1">HELLO I' M</h1>
            <h1 className="text-white text-[100px] leading-none pt-2">Mohd <span className="px1">Shahrukh</span></h1>
            <h1 className="text-white text-2xl font-medium px-1 py-8" >A Passionate
              <span className="text-[#81da65] text-3xl">
                <TypeAnimation
                  sequence={[
                    " Programmer ",
                    1500,
                    " Web-Developer ",
                    1500,
                    " SoftWare Developer ",
                    1500,
                  ]}
                  speed={20}
                  repeat={Infinity}
                /></span></h1>
            <button className="bg-[#81da65] my-3 px-9 py-3 rounded-lg z-10 text-lg font-bold relative overflow-hidden group">
              <div className="w-0 h-0 hover: blur-sm h-25 w-2 rotate-45 z-1 absolute left-[-40px] top-[-20px] bg-white transition-all easy-in-out duration-300 group-hover:left-47" ></div>
              Say Hello
            </button>
          </div>
          <div className="relative w-[95vh] h-[95vh]">
            {/* Animated Circle */}
            <motion.div
              className=" absolute w-full h-full top-40 bg-[#848484] rounded-full opacity-25"
              animate={{ scale: [1, 0.9, 1] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image - No Animation */}
            <div className="absolute top-25 inset-0 flex items-center justify-center">
              <Image
               className="[transform:rotateY(180deg)]"
                src={Profile}
                width={550}
                height={550}
                alt="profile image"
              />
            </div>
          </div>
        </div>
        <motion.div className="absolute top-22 right-140"
          animate={ {y:[0,10,0]}}
          transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
              className=""
              src={Shape4}
              width={70}
              height={70}
              alt=""
              >

              </Image>
        </motion.div>
        <motion.div className="absolute bottom-22 left-20"
          animate={ {y:[0,10,0]}}
          transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
              className=""
              src={Shape3}
              width={40}
              height={40}
              alt=""
              >

              </Image>
        </motion.div>
        <motion.div className="absolute bottom-60 right-40"
          animate={ {y:[0,10,0]}}
          transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
              className=""
              src={Shape2}
              width={40}
              height={40}
              alt=""
              >

              </Image>
        </motion.div>
        <motion.div className="absolute top-22 right-10"
          animate={ {y:[0,10,0]}}
          transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
              className=""
              src={Shape1}
              width={70}
              height={70}
              alt=""
              >

              </Image>
        </motion.div>
      </div>
    )
}