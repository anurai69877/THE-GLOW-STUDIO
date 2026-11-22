
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/image/logo4.png";
export default function Header() {


    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode')
        return savedTheme !== null ? savedTheme === 'true' : false
    })

    // Apply Theme
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('darkMode', 'true')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('darkMode', 'false')
        }
    }, [darkMode])

    // Toggle Theme
    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Menu', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <header
            className={`w-full shadow-md relative z-50 border-b transition-all duration-500 ${darkMode
                    ? 'bg-[#241820] border-[#533541]'
                    : 'bg-[#FFF7F8] border-[#F0DCE2]'
                }`}
        >

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

                <div className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-2 gap-4 lg:gap-0">

                    {/* Logo and Brand Name */}

                    <Link
                        to="/"
                        className="flex items-center gap-2 shrink-0 group"
                    >

                        <img
                            src={logo}
                            alt="The Glow Studio Logo"
                            className="w-[95px] h-[75px] sm:w-[120px] sm:h-[85px] lg:w-[135px] lg:h-[95px] object-contain"
                        />

                        <div className="-ml-3 sm:-ml-5">

                            <p
                                className={`text-2xl sm:text-3xl lg:text-[34px] font-serif tracking-[2px] transition-colors duration-500 ${darkMode
                                        ? 'text-[#FFE4ED]'
                                        : 'text-[#A75E78]'
                                    }`}
                            >
                                THE GLOW
                            </p>

                            <p
                                className={`text-[11px] sm:text-xs tracking-[0.55em] text-center mt-1 transition-colors duration-500 ${darkMode
                                        ? 'text-[#E7AFC2]'
                                        : 'text-[#C18A9D]'
                                    }`}
                            >
                                BEAUTY STUDIO
                            </p>

                        </div>

                    </Link>


                    {/* Navigation */}

                    <nav className="flex items-center justify-center flex-wrap gap-x-5 sm:gap-x-7 lg:gap-x-8 gap-y-3">

                        {navLinks.map((item) => (

                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative text-sm sm:text-base font-medium transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 rounded-sm ${darkMode
                                        ? 'text-[#FFE8EF] hover:text-[#F3B9CD] after:bg-[#F3B9CD] focus-visible:ring-[#F3B9CD]'
                                        : 'text-[#754B56] hover:text-[#C77D96] after:bg-[#C77D96] focus-visible:ring-[#C77D96]'
                                    }`}
                            >
                                {item.name}
                            </Link>

                        ))}


                        {/* Dark / Light Mode Button */}

                        <button
                            type="button"
                            onClick={toggleDarkMode}
                            aria-label={
                                darkMode
                                    ? 'Switch to light mode'
                                    : 'Switch to dark mode'
                            }
                            aria-pressed={darkMode}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-500 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${darkMode
                                    ? 'bg-[#F3B9CD] text-[#35232D] hover:bg-[#FFE4ED] focus-visible:ring-[#F3B9CD]'
                                    : 'bg-[#A75E78] text-white hover:bg-[#87465F] focus-visible:ring-[#C77D96]'
                                }`}
                        >

                            <FontAwesomeIcon
                                icon={darkMode ? faSun : faMoon}
                                className="text-base"
                            />

                            <span>
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </span>

                        </button>

                    </nav>

                </div>

            </div>

        </header>
    )
}
