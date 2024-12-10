import { headerLogo } from "../assets/images";
import { hamburger, closeIcon } from "../assets/icons";
import { navLinks } from "../constants";
import { useEffect } from "react";
import { useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(true); // Controls visibility of the nav
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setisMenuOpen(!isMenuOpen);
      }

      const currentScrollY = window.scrollY;

      // If scrolling down, hide nav; if scrolling up, show nav
      if (currentScrollY > lastScrollY + 10) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY - 40) {
        setShowNav(true);
      } else if (currentScrollY === 0) {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, [lastScrollY]);

  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`
        bg-white shadow padding-x py-6 max-sm:py-4 fixed z-20 w-full
        transition-transform duration-300 ease-in-out
        ${showNav ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <nav className="max-container flex justify-between items-center">
        <a href="/">
          <img
            className="max-sm:w-24 max-sm:h-auto"
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <div>
          <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat
                            leading-normal text-lg
                            border-2
                           text-black hover:border-coral-red py-3 px-6 rounded-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {!isMenuOpen && (
          <div className="hidden max-lg:block">
            <img
              className="max-sm:w-4 max-sm:h-auto"
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={toggleMenu}
            />
          </div>
        )}

        {isMenuOpen && (
          <div className="hidden max-lg:block">
            <img
              src={closeIcon}
              alt="close_icon"
              width={25}
              height={25}
              onClick={toggleMenu}
            />
          </div>
        )}
      </nav>

      {/* Dropdown Menu */}
      <ul
        className={`pt-6 flex flex-col gap-6 transform transition-transform duration-1000 ease-in-out
                    ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0 hidden"
                    }`}
      >
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
    </header>
  );
};

export default Nav;
