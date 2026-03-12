import React, { useState } from "react";
import logo from "../assets/main.png";
import { NavLink } from "react-router"; // react-router-dom নিশ্চিত করুন

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 bg-white border-b border-gray-100 shadow-sm z-100">
            <div className="max-w-300 mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className="w-auto h-8 md:h-10" />
                    </NavLink>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink to="/services" className={({ isActive }) => (isActive ? "font-bold" : "text-gray-700 font-medium hover:text-[#ffa600] transition-colors")}>
                        Services
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? " font-bold" : "text-gray-700 font-medium hover:text-[#ffa600] transition-colors")}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? " font-bold" : "text-gray-700 font-medium hover:text-[#ffa600] transition-colors")}>
                        Contact
                    </NavLink>
                    <button className="custom-btn">Book a Free Consultation</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setOpen(!open)} className="text-gray-800 text-3xl focus:outline-none z-50">
                        {open ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu (Slide from Right) */}
            {/* Overlay background for closing menu when clicking outside */}
            <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setOpen(false)}></div>

            <div className={`fixed right-0 top-0 h-screen bg-white shadow-2xl transition-transform duration-300 ease-in-out w-72 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col p-8 pt-24 space-y-6">
                    <NavLink to="/services" onClick={() => setOpen(false)} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-[#ffa600]" : "text-gray-800 hover:text-[#ffa600]"}`}>
                        Services
                    </NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-[#ffa600]" : "text-gray-800 hover:text-[#ffa600]"}`}>
                        About
                    </NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)} className={({ isActive }) => `text-lg font-semibold ${isActive ? "text-[#ffa600]" : "text-gray-800 hover:text-[#ffa600]"}`}>
                        Contact
                    </NavLink>
                    <hr className="border-gray-100" />
                    <button onClick={() => setOpen(false)} className="custom-btn">
                        Book a Free Consultation
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
