import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Logo from "../assets/logo.webp";

const Navbar = () => {
    return (
        <>
        {/* Top Bar */}
        <nav className="h-10 w-full bg-[#fec325] flex items-center justify-between px-4 text-black text-sm">
            <div className="flex items-center gap-4">
                <FaPhoneAlt />
                <a href="tel:+918743000197" className="font-semibold">+91 8743000197</a>
                <FaEnvelope className="ml-6" />
                <a href="mailto:vanasthali@royalcollectionhotels.com" className="font-semibold">
                    vanasthali@royalcollectionhotels.com
                </a>
            </div>
            <div className="flex items-center gap-4 text-xl">
                <a href="https://www.instagram.com/vanasthaliresor" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/VanasthaliJungleResortJimCorbett#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.youtube.com/channel/UCkq2ZJodgubpiwQXEgfDO3A" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>
        </nav>

        {/* Header */}
        <header className="h-24 w-full flex justify-between items-center px-4">
            <div className="flex items-center w-[40%]">
                <img src={Logo} alt="Logo" className="h-20 p-4" />
                <p className="font-bold text-2xl">Vanasthali Jungle Resort</p>
            </div>
            <div className="w-[63%]">
                <ul className="flex justify-between gap-4 font-bold font-sans">
                    {["HOME", "ABOUT", "ROOMS", "PACKAGES", "PLACES ", "GALLERY", "PAYMENT", "CONTACT"].map((item, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="px-3 py-2 hover:bg-red-700 hover:text-white transition rounded-md"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
        </>
    );
};

export default Navbar;
