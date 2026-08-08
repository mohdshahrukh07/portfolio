import PhoneIcon from "./icons/phoneIcon"
import LocationIcon from "./icons/locationIcon"
import MailIcon from "./icons/mailIcon"
export default function ContactPage() {
    return (
        <section className="w-full bg-[#eef1f7] py-16 px-5">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="uppercase tracking-[8px] text-[#7ed957] text-sm font-medium">
                        Contact Me
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mt-3">
                        Let's Start A New Project
                    </h2>
                </div>

                {/* Main Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left */}
                    <div className="space-y-10">

                        <div className="flex items-start gap-6">
                            <div className="w-15 h-15 rounded-full bg-[#81da65] flex items-center justify-center text-white">

                                <LocationIcon />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Location
                                </h3>

                                <p className="text-gray-600 text-lg mt-2">
                                    20 Bordeshi, London, USA
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-15 h-15 rounded-full bg-[#81da65] flex items-center justify-center text-white">
                                <PhoneIcon />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Phone
                                </h3>

                                <p className="text-gray-600 text-ml mt-2">
                                    +123 456 7890
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-15 h-15 rounded-full bg-[#81da65] flex items-center justify-center text-white">
                                <MailIcon />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Email
                                </h3>

                                <p className="text-gray-600 text-lg mt-2">
                                    hello@thames.com
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right */}
                    <form className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="h-14 bg-white text-gray-400 text-lg placeholder-gray-400 text-normal border border-gray-400 rounded-md px-5 outline-none transition-all duration-200 ease-in-out focus:border-[#81da65]"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="h-14 bg-white text-gray-400 text-lg placeholder-gray-400 text-normal border border-gray-400 rounded-md px-5 outline-none transition-all duration-200 ease-in-out focus:border-[#81da65]"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Your Phone"
                                className="h-14 bg-white text-gray-400 text-lg placeholder-gray-400 text-normal border border-gray-400 rounded-md px-5 outline-none transition-all duration-200 ease-in-out focus:border-[#81da65]"
                            />

                            <input
                                type="text"
                                placeholder="Your Subject"
                                className="h-14 bg-white text-gray-400 text-lg placeholder-gray-400 text-normal border border-gray-400 rounded-md px-5 outline-none transition-all duration-200 ease-in-out focus:border-[#81da65]"
                            />
                        </div>

                        <textarea
                            rows={5}
                            placeholder="Start writing message here"
                            className="w-full bg-white text-gray-400 text-lg placeholder-gray-400 text-normal border border-gray-400 rounded-md p-5 outline-none resize-none transition-all duration-200 ease-in-out focus:border-[#81da65]"
                        />

                        <button className="bg-[#81da65] text-white font-medium my-3 px-9 py-4 rounded-lg z-10 text-lg relative overflow-hidden group">
                            <div className="hover: blur-sm h-25 w-2 rotate-45 z-1 absolute -left-15 -top-2 bg-white transition-all easy-in-out duration-300 group-hover:left-47" ></div>
                            SUBMIT NOW
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}