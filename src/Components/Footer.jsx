import React from "react";
import logo from "../assets/main.png";
import { Link } from "react-router";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-[#141414] text-white py-10">
            <div className="max-w-300 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Company Info */}
                <div className="space-y-4">
                    <img src={logo} alt="Logo" className="" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                        FINTRIXX – Your Amazon Growth Partner <br />
                        Since 2016, we boost Amazon success with expert SEO, PPC, and growth strategies.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Home</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link to="/" className="hover:text-[#ffa600]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-[#ffa600]">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-[#ffa600]">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/why-choose-us" className="hover:text-[#ffa600]">
                                Why Choose Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-[#ffa600]">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                            <HiOutlineMail className="text-[#ffa600]" />
                            <p>leadsbridgedemo@example.com</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" max-w-300 mx-auto px-4 border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center ">
                <p className="text-gray-400 text-sm">© 2025 Copyright Amazon</p>
                <div className="flex gap-6 mt-4 md:mt-0 text-sm">
                    <Link to="/privacy" className="text-gray-400 hover:text-[#ffa600]">
                        Privacy Policy
                    </Link>
                    <Link to="/terms" className="text-gray-400 hover:text-[#ffa600]">
                        Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
