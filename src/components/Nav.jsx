import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import { useEffect } from 'react';
import { useState } from 'react';

const Nav = () => {
    const [showNav, setShowNav] = useState(true); // Controls visibility of the nav
    const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // If scrolling down, hide nav; if scrolling up, show nav
        if (currentScrollY > lastScrollY) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }

        setLastScrollY(currentScrollY); // Update the last scroll position
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll); // Cleanup
        };
    }, [lastScrollY]);

    const [isMenuOpen, setisMenuOpen] = useState(false)

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    };    
    
  return (

    <header className={`
        bg-white shadow padding-x py-6 fixed z-20 w-full
        transition-transform duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
    `}>
        <nav className='max-container flex justify-between items-center'>
                <a href="/">
                    <img
                        src={headerLogo}
                        alt='Logo'
                        width={130}
                        height={29}
                    />
                </a>
                <div>
                    <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className='font-montserrat
                                    leading-normal text-lg
                                    border-2
                                    text-black hover:border-coral-red py-3 px-6 rounded-full'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='hidden max-lg:block'>
                    <img
                        src={hamburger}
                        alt='Hamburger'
                        width={25}
                        height={25}
                        onClick={toggleMenu}
                    />
                </div>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className="absolute w-full h-[100vh] left-0 top-0 bg-white shadow-md rounded-lg p-4">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                            href={item.href}
                            className="font-montserrat leading-normal text-base text-black hover:text-coral-red"
                            >
                            {item.label}
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                )}
        </nav>
    </header>
  )
}

export default Nav