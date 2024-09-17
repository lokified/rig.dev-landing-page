import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-5">
      <div className="flex gap-12 justify-between md:justify-center px-2 lg:px-5">
        <div className="flex gap-1 items-center">
          <img src="/images/icon.svg" alt="rig-icon" />
          <p className="font-bold">Rig.dev</p>
        </div>

        <div className="hidden md:flex gap-5 items-center">
          <a href="#Docs" className="text-text-secondary">
            Docs
          </a>
          <a href="#Pricing" className="text-text-secondary">
            Pricing
          </a>
          <a href="#About" className="text-text-secondary">
            About
          </a>
          <a href="#Blog" className="text-text-secondary">
            Blog
          </a>
          <a href="#Community" className="text-text-secondary">
            Community
          </a>
        </div>

        <div className="flex gap-2 items-center">
          <a href="#support" className="flex gap-2 bg-black p-2 rounded-md">
            <img src="/images/github.svg" alt="rig-logo" width={15} />
            <p className="text-white">Support us</p>
          </a>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-64 z-1 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="md:hidden flex flex-col items-center space-y-4 py-8 bg-white shadow-md">
            <a href="#Docs" className="text-text-secondary hover:text-black">
              Docs
            </a>
            <a href="#Pricing" className="text-text-secondary hover:text-black">
              Pricing
            </a>
            <a href="#About" className="text-text-secondary hover:text-black">
              About
            </a>
            <a href="#Blog" className="text-text-secondary hover:text-black">
              Blog
            </a>
            <a
              href="#Community"
              className="text-text-secondary hover:text-black"
            >
              Community
            </a>

            <a href="#support" className="flex gap-2 bg-black p-2 rounded-md">
              <img src="/images/github.svg" alt="rig-logo" width={15} />
              <p className="text-white">Support us</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
