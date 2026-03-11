import React from "react";
import logo from "../assets/main.png";
import { NavLink } from "react-router";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="max-w-360 mx-auto px-30 py-6 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-6">
                    <NavLink to="/services" className={({ isActive }) => (isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500")}>
                        Services
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) => (isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500")}>
                        About
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500")}>
                        Contact
                    </NavLink>

                    {/* CTA Button */}
                    <button className="custom-btn">Book a Free Consultation</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
