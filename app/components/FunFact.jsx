export default function FunFact() {
    return (
        <div id="works"
            className="
            scrolling-smooth relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-[#25262f] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-30">
            
            {/* Background MS */}
            <div className="z-1 absolute -top-20 -left-20 sm:-top-30 sm:-left-20 lg:-top-50 lg:left-0
                h-56 w-56 sm:h-72 sm:w-72 lg:h-100 lg:w-100
                text-[100px] sm:text-[140px] lg:text-[200px]
                opacity-10 flex items-center justify-center rounded-full
                bg-gray-400 font-bold text-[#272730]"
            >
                MS
            </div>

            <div className="z-1 absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-16 lg:-bottom-30 lg:-right-10
                h-56 w-56 sm:h-72 sm:w-72 lg:h-100 lg:w-100
                text-[100px] sm:text-[140px] lg:text-[200px]
                opacity-10 flex items-center justify-center rounded-full
                bg-gray-400 font-bold text-[#272730]"
            >
                MS
            </div>

            {/* Main Content */}
            <div className="z-10 w-full max-w-7xl flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-0 py-2 mt-0 lg:mt-6">

                {/* Left Content */}
                <div className="w-full lg:w-[40%] h-full">
                    <h3 className="text-sm sm:text-base lg:text-xl text-[#80db66] tracking-[0.2em] sm:tracking-[0.25em] font-medium">
                        FUN FACTS
                    </h3>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium py-3 lg:py-4 leading-tight">
                        I Develop System that Works
                    </h1>

                    <p className="text-[#9098bb] mt-3 lg:mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                        Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                        charini hoye khbor nio na sit volup sundori toma amar tumi
                        nili mar tatem accusantium dolore.
                    </p>
                </div>

                {/* Stats */}
                <div className="w-full lg:w-[60%] h-full lg:pl-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-0 sm:px-3">

                        {/* Experience */}
                        <div className="min-h-32 sm:min-h-36 lg:min-h-40 border border-[#474851] rounded-xl flex justify-center px-3 gap-3 sm:gap-4 items-center">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#80db66] font-medium">
                                12
                            </h1>

                            <h1 className="text-base sm:text-lg lg:text-xl text-white font-medium">
                                Years of <br />
                                Experience
                            </h1>
                        </div>

                        {/* Clients */}
                        <div className="min-h-32 sm:min-h-36 lg:min-h-40 border border-[#474851] rounded-xl flex justify-center px-3 gap-3 sm:gap-4 items-center">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#80db66] font-medium">
                                2K
                            </h1>

                            <h1 className="text-base sm:text-lg lg:text-xl text-white font-medium">
                                Total
                                <br />
                                Clients
                            </h1>
                        </div>

                        {/* Projects */}
                        <div className="min-h-32 sm:min-h-36 lg:min-h-40 border border-[#474851] rounded-xl flex justify-center px-3 gap-3 sm:gap-4 items-center">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#80db66] font-medium">
                                4K
                            </h1>

                            <h1 className="text-base sm:text-lg lg:text-xl text-white font-medium">
                                Projects
                                <br />
                                Completed
                            </h1>
                        </div>

                        {/* Products */}
                        <div className="min-h-32 sm:min-h-36 lg:min-h-40 border border-[#474851] rounded-xl flex justify-center px-3 gap-3 sm:gap-4 items-center">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#80db66] font-medium">
                                30
                            </h1>

                            <h1 className="text-base sm:text-lg lg:text-xl text-white font-medium">
                                Digital
                                <br />
                                Products
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}