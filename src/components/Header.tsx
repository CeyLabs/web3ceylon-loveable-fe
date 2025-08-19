import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Single source of truth for nav items
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "cities", label: "Cities" },
      { id: "speakers", label: "Speakers" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation - Floating centered pill */}
      <nav
        className={`group/navigation-menu max-w-max fixed hidden lg:flex items-center justify-between gap-8 px-5 py-2.5 left-1/2 -translate-x-1/2 top-[19px] z-50 backdrop-blur-3xl bg-white/30 rounded-2xl transition-all duration-300 ${
          isScrolled ? "bg-white/40 shadow-lg" : ""
        } ${className ?? ""}`}
        aria-label="Main"
      >
        <NavLink to="/" className="flex items-center gap-2">
          <p className="text-2xl font-sans font-medium tracking-tighter text-black">
            Web3Ceylon
          </p>
        </NavLink>

        <ul className="flex list-none items-center justify-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-white/20 hover:text-black focus:bg-white/20 focus:text-black outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-black/20 bg-transparent text-black"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-black/20 bg-white/20 hover:bg-white/30 text-black h-9 px-4 py-2 border border-white/30 cursor-pointer tracking-tight rounded-xl"
            onClick={() => scrollToSection("speakers")}
          >
            Learn More
          </button>
          <button
            className="hidden lg:flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-white/50 text-white hover:bg-black/90 h-9 px-4 py-2 rounded-xl bg-black"
            onClick={() => scrollToSection("register")}
          >
            <span className="flex tracking-tight text-xs items-center cursor-pointer">
              Register Now
              <ArrowUpRight className="inline-block ml-1" size={16} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Compact pill with dropdown */}
      <div
        className={`fixed flex lg:hidden items-center justify-between w-[90vw] px-2.5 py-2 left-1/2 -translate-x-1/2 top-[19px] z-50 backdrop-blur-3xl bg-white/30 rounded-2xl ${
          isScrolled ? "shadow-lg bg-white/40" : ""
        } ${className ?? ""}`}
      >
        <NavLink to="/">
          <p className="text-2xl font-sans font-medium tracking-tighter text-black">
            Web3Ceylon
          </p>
        </NavLink>
        <div className="relative" ref={mobileMenuRef}>
          <button
            className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium hover:bg-white/20 focus:bg-white/20 outline-none transition-all focus-visible:ring-[3px] focus-visible:ring-black/20 text-black"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            Menu
          </button>
          {/* Smooth expanding panel */}
          <div
            className={`absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isMobileMenuOpen
                ? "max-h-[70vh] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 translate-y-1"
            }`}
            style={{ willChange: "max-height, opacity, transform" }}
          >
            <div className="p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="w-full text-left rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100"
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 border-t border-gray-100 pt-2 grid grid-cols-1 gap-2">
                <button
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-black/20 bg-white hover:bg-gray-50 text-black h-9 px-4 py-2 border border-gray-200 cursor-pointer tracking-tight rounded-xl"
                  onClick={() => {
                    scrollToSection("speakers");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Learn More
                </button>
                <button
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-black/20 text-white hover:bg-black/90 h-9 px-4 py-2 rounded-xl bg-black"
                  onClick={() => {
                    scrollToSection("register");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="flex tracking-tight items-center cursor-pointer">
                    Register now
                    <ArrowUpRight className="inline-block ml-1" size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface NavLinksProps {
  scrollToSection: (id: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => null;

export default Header;
