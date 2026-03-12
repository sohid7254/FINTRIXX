import React from "react";
import amz from "../assets/amz.png";
import logo from "../assets/logo.png";
import img1 from "../assets/ellipse1.png";
import img2 from "../assets/ellipse2.png";
import { Link } from "react-router";

const Value = () => {
    return (
        <section className="bg-[#141414] text-white">
            <div className="max-w-300 md:px-4 px-4 mx-auto flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Left Content */}
                    <div className="space-y-3 mt-15">
                        <div className="flex items-center gap-1">
                            <img src={amz} alt="" />
                            <h2>
                                Why <span className="word">Choose Us</span>
                            </h2>
                        </div>
                        <div>
                            <h2 className="text-6xl">
                                Why Choose <span className="word">FINTRIXX?</span>
                            </h2>
                            <p className="text-lg">
                                Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank higher, scale faster, <br /> & sell smarter. We analyze trends, optimize ads, manage inventory, & protect your account <br /> so you can focus on your business. <br />
                                🚀 No more guesswork. No more wasted money. Just real results.
                            </p>
                        </div>
                        <div className="w-90">
                            <button className="btn-custom ">Book a Free Consultation</button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="relative  h-117.5 flex justify-center items-center">
                        <img src={logo} alt="FINTRIXX Logo" className="lg:left-1/56  relative lg:w-60 lg:h-60 w-40 h-40 -left-27"   />
                        <div className="absolute lg:left-9 lg:top-22 transform lg:translate-x-40 lg:translate-y-1//2 lg:rotate-7 rotate-4">
                            <img src={img1} alt="" className="lg:w-37 w-30 " />
                        </div>
                        <div className="absolute lg:-right-6 lg:top-63 transform lg:translate-x-20 lg:-translate-y-1/2 lg:rotate-10 rotate-4">
                            <img src={img2} alt="" className="lg:w-37 w-30 " />
                        </div>

                        <div className="absolute -right-5 lg:-right-40 top-1/5 lg:top-1/5 transform lg:translate-y-1/ flex lg:flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white px-3 py-4 rounded-md">🚀 Proven Expertise</p>
                        </div>
                        <div className="absolute -right-15 lg:-right-50 lg:top-45 top-41 transform lg:translate-y-1/ flex lg:flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white lg:px-3 py-4 rounded-md">🚀 Maximized Visibility</p>
                        </div>
                        <div className="absolute lg:-right-47 -right-18 top-1/2 lg:top-65 transform lg:translate-y-1/ flex lg:flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white py-3 px-3 lg:px-5 lg:py-4 rounded-md">🚀 Strategic Growth</p>
                        </div>
                        <div className="absolute top-76 -right-18 lg:-right-42 lg:top-84 transform lg:translate-y-1/ flex lg:flex-col gap-4">
                            <p className="flex items-center gap-2 bg-[#242424] text-white px-4 py-3 lg:px-3 lg:py-4 rounded-md">🚀 Exclusive Partnerships</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Value;
